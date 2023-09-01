package com.hyderabad.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyderabad.daos.UserDao;
import com.hyderabad.dtos.Credentials;
import com.hyderabad.dtos.DtoEntityConverter;
import com.hyderabad.dtos.ShipmentUserDto;
import com.hyderabad.dtos.UserDto;
import com.hyderabad.entities.Shipment;
import com.hyderabad.entities.User;

@Transactional
@Service
public class UserServiceImpl {
	@Autowired
	UserDao userDao;
	@Autowired
	DtoEntityConverter converter;

	public User findByEmail(String email) {
		return userDao.findByEmail(email);
	}

	public UserDto authenticateUser(Credentials cred) {
		User dbuser = userDao.findByEmailAndPassword(cred.getEmail(), cred.getPassword());
		if (dbuser != null)
			return converter.toUserDto(dbuser);
		return null;
	}

	public Map<String, Object> registerUser(UserDto userDto) {
		User user = findByEmail(userDto.getEmail());
		if (user == null) {
			user = converter.toUserEntity(userDto);
			user = userDao.save(user);
			return Collections.singletonMap("insertedId", user.getUserId());
		} else {
			return Collections.singletonMap("error", "Email id already exist!");
		}
	}

	public Map<String, Object> updateUser(int id, ShipmentUserDto dto) {
		System.out.println(dto);
		User user = userDao.findByUserId(id);
		System.out.println(user);
		user.setName(dto.getName());
		user.setCompanyName(dto.getCompanyName());
		user.setPhone(dto.getPhone());
		user.setAddressLine1(dto.getAddress1());
		user.setAddressLine2(dto.getAddress2());
		user.setPincode(dto.getPincode());
		user.setCity(dto.getCity());
		user.setState(dto.getState());
		user.setCountry(dto.getCountry());
		user = userDao.save(user);
		return Collections.singletonMap("insertedId", user.getUserId());
	}

	public Map<String, Object> findAll(int id) {
		User user = userDao.findByUserId(id);
		List<Shipment> shipments = user.getShipments();
		return Collections.singletonMap("shipments", shipments);
	}

	public Map<String, Object> getUserById(UserDto userDto) {
		User user = userDao.findByUserId(userDto.getUserId());
		ShipmentUserDto userDto1 = converter.toShipmentUserDto(user);
		if (user != null) {
			return Collections.singletonMap("user", userDto1);
		} else {
			return Collections.singletonMap("error", "No user found");
		}
	}

}
