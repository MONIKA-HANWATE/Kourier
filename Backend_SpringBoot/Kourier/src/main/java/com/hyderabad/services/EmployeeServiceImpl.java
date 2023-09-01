package com.hyderabad.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyderabad.daos.EmployeeDao;
import com.hyderabad.dtos.Credentials;
import com.hyderabad.dtos.DtoEntityConverter;
import com.hyderabad.dtos.EmployeeDto;
import com.hyderabad.dtos.UpdateEmployeeDto;
import com.hyderabad.entities.Employee;
import com.hyderabad.entities.Shipment;

@Transactional
@Service
public class EmployeeServiceImpl {
	@Autowired
	EmployeeDao employeeDao;
	@Autowired
	DtoEntityConverter converter;

	public Employee findByEmail(String email) {
		return employeeDao.findByEmail(email);
	}

	public EmployeeDto authenticateEmployee(Credentials cred) {
		Employee employee = employeeDao.findByEmail(cred.getEmail());
		String rawpassword = cred.getPassword();
		String accountStatus1 = employee.getAccountStatus();
		if (employee != null && rawpassword.equals(employee.getPassword())
				&& accountStatus1.equalsIgnoreCase("Active")) {
			EmployeeDto result = converter.toEmployeeDto(employee);
			return result;
		}
		return null;
	}

	public Map<String, Object> registerEmployee(EmployeeDto employeeDto) {
		Employee employee = findByEmail(employeeDto.getEmail());
		if (employee == null) {
			employee = converter.toEmployeeEntity(employeeDto);
			employee = employeeDao.save(employee);
			return Collections.singletonMap("insertedId", employee.getEmployeeId());
		} else {
			return Collections.singletonMap("error", "Email id already exist!");
		}
	}

	public Map<String, Object> updateEmployee(int id, UpdateEmployeeDto dto) {
		Employee employee = employeeDao.findByEmployeeId(id);
		employee.setPhone(dto.getPhone());
		employee.setAddressLine1(dto.getAddress1());
		employee.setAddressLine2(dto.getAddress2());
		employee.setPincode(dto.getPincode());
		employee.setCity(dto.getCity());
		employee.setState(dto.getState());
		employee.setCountry(dto.getCountry());
		employee = employeeDao.save(employee);
		return Collections.singletonMap("insertedId", employee.getEmployeeId());
	}

	public Map<String, Object> deactivateEmployee(UpdateEmployeeDto dto) {
		int employeeId = dto.getEmployeeId();
		Employee employee = employeeDao.findByEmployeeId(employeeId);
		if (employee.getRole().equals("Delivery Agent")) {
			employee.setWorkStatus("N.A.");
			employee.setAccountStatus("Inactive");
			employee.setDeactivateReason(dto.getDeactivateReason());
			employee = employeeDao.save(employee);
			return Collections.singletonMap("insertedId", employee.getEmployeeId());
		}
		return null;

	}

	public Map<String, Object> findAllEmployees() {
		List<Employee> employeeList = employeeDao.findDeliveryAgent("Delivery Agent");
		List<EmployeeDto> employeeDto = employeeList.stream()
				// .filter(e -> e.getRole()== "deliveryAgent")
				.map(employee -> converter.toEmployeeDto(employee)).collect(Collectors.toList());
		System.out.println(employeeDto);
		return Collections.singletonMap("deliveryAgents", employeeDto);
	}

	public Map<String, Object> findAssignedShipments(int id) {
		Employee employee = employeeDao.findByEmployeeId(id);
		List<Shipment> shipments = employee.getShipments(); 
		return Collections.singletonMap("shipments", shipments);
	}

}
