package com.sunbeam.services;

import java.util.Calendar;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.EmployeeDao;
import com.sunbeam.daos.ServiceDao;
import com.sunbeam.daos.ShipmentDao;
import com.sunbeam.daos.TrackingDao;
import com.sunbeam.daos.UserDao;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.EmployeeDto;
import com.sunbeam.dtos.OrdersDto;
import com.sunbeam.dtos.ParcelDto;
import com.sunbeam.dtos.SchedulePickUp;
import com.sunbeam.dtos.ShipmentDto;
import com.sunbeam.dtos.ShipmentUserDto;
import com.sunbeam.entities.Complaint;
import com.sunbeam.entities.Employee;
import com.sunbeam.entities.Feedback;
import com.sunbeam.entities.Payment;
import com.sunbeam.entities.Shipment;
import com.sunbeam.entities.Tracking;
import com.sunbeam.entities.User;

@Transactional
@Service
public class ShipmentServiceImpl {
	@Autowired
	ShipmentDao shipmentDao;

	@Autowired
	UserDao userDao;

	@Autowired
	ServiceDao serviceDao;

	@Autowired
	EmployeeDao employeeDao;

	@Autowired
	TrackingDao trackingDao;

	@Autowired
	DtoEntityConverter converter;

	public Map<String, Object> addSender(ShipmentUserDto senderDto) {
		Shipment shipment = converter.toShipmentUserEntity(senderDto);
		User user = userDao.findByUserId(senderDto.getUserId());
		shipment.setUser(user);
		System.out.println(senderDto);
		shipment.setShipmentStatus("Unbooked");
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> addReceiver(int id, ShipmentUserDto receiverDto) {
		System.out.println(receiverDto);
		Shipment shipment = shipmentDao.findByShipmentId(id);
		shipment = converter.toShipmentUserEntity(shipment, receiverDto);
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> addParcel(int id, ParcelDto dto) {
		System.out.println(dto.getServiceId());
		Shipment shipment = shipmentDao.findByShipmentId(id);
		com.sunbeam.entities.Service service = serviceDao.findByServiceId(dto.getServiceId());

		double price = service.getRate() + (dto.getParcel().getWeight() * 25);
		shipment.setParcel(dto.getParcel());
		shipment.setService(serviceDao.findByServiceId(dto.getServiceId()));
		shipmentDao.save(shipment);

		return Collections.singletonMap("price", price);
	}

	public Map<String, Object> addPayment(int id, Payment payment) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		shipment.setShipmentStatus("Booked");
		shipment.setEstimatedDeliveryDate(null);
		shipment.setPayment(payment);
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> findAll() {
		List<Shipment> shipments = shipmentDao.findAll();
		return Collections.singletonMap("shipments", shipments);
	}

	public Map<String, Object> findShipment(int id) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		if (shipment != null)
			return Collections.singletonMap("shipment", shipment);
		else {
			return Collections.singletonMap("error", "Invalid shipment id");
		}
	}

	public Map<String, Object> schedule(int id, SchedulePickUp date) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		System.out.println(date.getPickUpDate());
		shipment.setPickUpDate(date.getPickUpDate());
		Calendar cal = Calendar.getInstance();
		cal.setTime(shipment.getPickUpDate());
		if (shipment.getService().getServiceName().equalsIgnoreCase("standard")) {
			cal.add(Calendar.DAY_OF_MONTH, 6);
			shipment.setEstimatedDeliveryDate(cal.getTime());
		} else {
			cal.add(Calendar.DAY_OF_MONTH, 4);
			shipment.setEstimatedDeliveryDate(cal.getTime());
		}
		return Collections.singletonMap("estimatedDelivery", shipment.getEstimatedDeliveryDate());
	}

	public Map<String, Object> modifyReceiver(int id, ShipmentUserDto receiverDto) {
		System.out.println(receiverDto);
		Shipment shipment = shipmentDao.findByShipmentId(id);
		if (shipment.getShipmentStatus().equalsIgnoreCase("Booked")) {
			shipment = converter.toShipmentUserEntity(shipment, receiverDto);
			shipmentDao.save(shipment);
			return Collections.singletonMap("insertedId", shipment.getShipmentId());
		} else {
			return Collections.singletonMap("error", "Parcel already shipped!");
		}
	}

	public Map<String, Object> addComplaint(int id, Complaint complaint) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		shipment.setComplaint(complaint);
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> addFeedback(int id, Feedback feedback) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		shipment.setFeedback(feedback);
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> setShipmentStatus(int id, ShipmentDto shipmentDto) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		shipment.setShipmentStatus(shipmentDto.getShipmentStatus());
		;
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> assignDeliveryAgent1(int id, EmployeeDto employeeDto) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		int empId = employeeDto.getEmployeeId();
		Employee employee = employeeDao.findByEmployeeId(empId);
		shipment.setEmployee(employee);
		shipmentDao.save(shipment);
		return Collections.singletonMap("insertedId", shipment.getShipmentId());
	}

	public Map<String, Object> assignDeliveryAgent(EmployeeDto employeeDto) {
		int shipmentId = employeeDto.getShipmentId();
		Shipment shipment = shipmentDao.findByShipmentId(shipmentId);
		int empId = employeeDto.getEmployeeId();
		Employee employee = employeeDao.findByEmployeeId(empId);
		if (employee.getWorkStatus().equals("Free")) {
			shipment.setEmployee(employee);
			System.out.println(shipment);
			employee.setWorkStatus("Occupied");
			shipmentDao.save(shipment);
			return Collections.singletonMap("insertedId", shipment.getShipmentId());
		}
		return null;
	}

	public Map<String, Object> getShipmentByStatus(ShipmentDto shipmentDto) {
		String status = shipmentDto.getShipmentStatus();
		List<Shipment> shipments = shipmentDao.findByShipmentStatusContaining(status);
		return Collections.singletonMap("shipments", shipments);
	}

	public List<OrdersDto> getShipmentByEmployeeId(int id) {
		List<Shipment> shipmentList = shipmentDao.findShipmentByEmpId(id);
		return shipmentList.stream().map(shipment -> converter.toEmployeeOrderDto(shipment))
				.collect(Collectors.toList());
	}

	public Map<String, Object> getShipmentById(ShipmentDto shipmentDto) {
		Shipment shipment = shipmentDao.findByShipmentId(shipmentDto.getShipmentId());
		OrdersDto ordersDto = converter.toEmployeeOrderDto(shipment);
		if (shipment != null) {
			return Collections.singletonMap("user", ordersDto);
		} else {
			return Collections.singletonMap("error", "No Shipment found");
		}
	}

	public Map<String, Object> trackShipment(int id) {
		Shipment shipment = shipmentDao.findByShipmentId(id);
		List<Tracking> trackingDetails = shipment.getTracking();
		return Collections.singletonMap("trackingDetails", trackingDetails);
	}

	public Map<String, Object> updateTrack(int id, Tracking tracking) {
		System.out.println(tracking);
		Shipment shipment = shipmentDao.findByShipmentId(id);
		tracking.setShipment(shipment);
		Tracking track = trackingDao.save(tracking);
		shipment.getTracking().forEach((track1) -> {
			System.out.println(track1);
		});
		return Collections.singletonMap("trackingId", track.getTrackingId());
	}

}
