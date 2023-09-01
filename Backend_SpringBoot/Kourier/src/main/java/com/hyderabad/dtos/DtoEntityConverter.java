package com.hyderabad.dtos;

import org.springframework.stereotype.Component;

import com.hyderabad.entities.Employee;
import com.hyderabad.entities.Shipment;
import com.hyderabad.entities.User;

@Component
public class DtoEntityConverter {

	public UserDto toUserDto(User entity) {
		UserDto dto = new UserDto();
		dto.setUserId(entity.getUserId());
		dto.setName(entity.getName());
		dto.setEmail(entity.getEmail());
		return dto;
	}

	public User toUserEntity(UserDto dto) {
		User entity = new User();
		entity.setName(dto.getName());
		entity.setCompanyName(dto.getCompanyName());
		entity.setPhone(dto.getPhone());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		return entity;
	}

	public Shipment toShipmentUserEntity(ShipmentUserDto dto) {
		Shipment entity = new Shipment();
		entity.setSenderName(dto.getName());
		entity.setSenderCompanyName(dto.getCompanyName());
		entity.setSenderPhone(dto.getPhone());
		entity.setSenderEmail(dto.getEmail());
		entity.setSenderAddressLine1(dto.getAddress1());
		entity.setSenderAddressLine2(dto.getAddress2());
		entity.setSenderPincode(dto.getPincode());
		entity.setSenderCity(dto.getCity());
		entity.setSenderState(dto.getState());
		entity.setSenderCountry(dto.getCountry());
		return entity;
	}

	public Shipment toShipmentUserEntity(Shipment entity, ShipmentUserDto dto) {
		entity.setReceiverName(dto.getName());
		entity.setReceiverCompanyName(dto.getCompanyName());
		entity.setReceiverPhone(dto.getPhone());
		entity.setReceiverEmail(dto.getEmail());
		entity.setReceiverAddressLine1(dto.getAddress1());
		entity.setReceiverAddressLine2(dto.getAddress2());
		entity.setReceiverPincode(dto.getPincode());
		entity.setReceiverCity(dto.getCity());
		entity.setReceiverState(dto.getState());
		entity.setReceiverCountry(dto.getCountry());
		return entity;
	}

	public EmployeeDto toEmployeeDto(Employee entity) {
		EmployeeDto dto = new EmployeeDto();
		dto.setEmployeeId(entity.getEmployeeId());
		dto.setName(entity.getName());
		dto.setPhone(entity.getPhone());
		dto.setEmail(entity.getEmail());
		dto.setCity(entity.getCity());
		dto.setState(entity.getState());
		dto.setCountry(entity.getCountry());
		dto.setAccountStatus(entity.getAccountStatus());
		dto.setWorkStatus(entity.getWorkStatus());
		dto.setRole(entity.getRole());
		return dto;
	}

	public Employee toEmployeeEntity(EmployeeDto dto) {
		Employee entity = new Employee();
		entity.setName(dto.getName());
		entity.setWorkStatus("Free");
		entity.setPhone(dto.getPhone());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setCompanyName(dto.getCompanyName());
		entity.setRole("Delivery Agent");
		return entity;
	}

	public ShipmentUserDto toShipmentUserDto(User user) {
		ShipmentUserDto userDto = new ShipmentUserDto();

		userDto.setUserId(user.getUserId());
		userDto.setName(user.getName());
		userDto.setCompanyName(user.getCompanyName());
		userDto.setPhone(user.getPhone());
		userDto.setEmail(user.getEmail());
		userDto.setAddress1(user.getAddressLine1());
		userDto.setAddress2(user.getAddressLine2());
		userDto.setPincode(user.getPincode());
		userDto.setCity(user.getCity());
		userDto.setState(user.getState());
		userDto.setCountry(user.getCountry());

		return userDto;
	}

	public OrdersDto toEmployeeOrderDto(Shipment shipment) {
		OrdersDto ordersDto = new OrdersDto();

		ordersDto.setShipmentId(shipment.getShipmentId());
		ordersDto.setSenderName(shipment.getSenderName());
		ordersDto.setSenderCompanyName(shipment.getSenderCompanyName());
		ordersDto.setSenderPhone(shipment.getSenderPhone());
		ordersDto.setSenderEmail(shipment.getSenderEmail());
		ordersDto.setSenderAddressLine1(shipment.getSenderAddressLine1());
		ordersDto.setSenderAddressLine2(shipment.getSenderAddressLine2());
		ordersDto.setSenderPincode(shipment.getSenderPincode());
		ordersDto.setSenderCity(shipment.getSenderCity());
		ordersDto.setSenderState(shipment.getSenderState());
		ordersDto.setSenderCountry(shipment.getSenderCountry());

		ordersDto.setReceiverName(shipment.getReceiverName());
		ordersDto.setReceiverCompanyName(shipment.getReceiverCompanyName());
		ordersDto.setReceiverPhone(shipment.getReceiverPhone());
		ordersDto.setReceiverEmail(shipment.getReceiverEmail());
		ordersDto.setReceiverAddressLine1(shipment.getReceiverAddressLine1());
		ordersDto.setReceiverAddressLine2(shipment.getReceiverAddressLine2());
		ordersDto.setReceiverPincode(shipment.getReceiverPincode());
		ordersDto.setReceiverCity(shipment.getReceiverCity());
		ordersDto.setReceiverState(shipment.getReceiverState());
		ordersDto.setReceiverCountry(shipment.getReceiverCountry());

		ordersDto.setShipmentStatus(shipment.getShipmentStatus());
		return ordersDto;

	}
}
