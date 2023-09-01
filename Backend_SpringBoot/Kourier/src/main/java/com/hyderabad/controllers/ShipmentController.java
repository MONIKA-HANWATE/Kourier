package com.hyderabad.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyderabad.dtos.EmployeeDto;
import com.hyderabad.dtos.OrdersDto;
import com.hyderabad.dtos.ParcelDto;
import com.hyderabad.dtos.Response;
import com.hyderabad.dtos.SchedulePickUp;
import com.hyderabad.dtos.ShipmentDto;
import com.hyderabad.dtos.ShipmentUserDto;
import com.hyderabad.entities.Complaint;
import com.hyderabad.entities.Feedback;
import com.hyderabad.entities.Payment;
import com.hyderabad.entities.Tracking;
import com.hyderabad.services.ShipmentServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/shipment")
public class ShipmentController {
	@Autowired
	private ShipmentServiceImpl shipmentService;

	@PostMapping("/createShipment")
	public ResponseEntity<?> addSender(@RequestBody ShipmentUserDto dto) {
		Map<String, Object> result = shipmentService.addSender(dto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PostMapping("/createShipment/{id}")
	public ResponseEntity<?> addReceiver(@PathVariable("id") int id, @RequestBody ShipmentUserDto dto) {
		Map<String, Object> result = shipmentService.addReceiver(id, dto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PostMapping("/createShipment/parcel/{id}")
	public ResponseEntity<?> addReceiver(@PathVariable("id") int id, @RequestBody ParcelDto dto) {
		Map<String, Object> result = shipmentService.addParcel(id, dto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PostMapping("/createShipment/payment/{id}")
	public ResponseEntity<?> addPayment(@PathVariable("id") int id, @RequestBody Payment payment) {
		Map<String, Object> result = shipmentService.addPayment(id, payment);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@GetMapping("/viewAll")
	public ResponseEntity<?> getShipments() {
		Map<String, Object> result = shipmentService.findAll();
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@GetMapping("/getShipment/{id}")
	public ResponseEntity<?> getShipment(@PathVariable("id") int id) {
		Map<String, Object> result = shipmentService.findShipment(id);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/modify/{id}")
	public ResponseEntity<?> modifyShipment(@PathVariable("id") int id, @RequestBody ShipmentUserDto dto) {
		Map<String, Object> result = shipmentService.modifyReceiver(id, dto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PostMapping("/schedule/{id}")
	public ResponseEntity<?> scheduleShipment(@PathVariable("id") int id, @RequestBody SchedulePickUp pickUpDate) {
		Map<String, Object> result = shipmentService.schedule(id, pickUpDate);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/complaint/{id}")
	public ResponseEntity<?> addComplaint(@PathVariable("id") int id, @RequestBody Complaint complaint) {
		Map<String, Object> result = shipmentService.addComplaint(id, complaint);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/feedback/{id}")
	public ResponseEntity<?> addFeedback(@PathVariable("id") int id, @RequestBody Feedback feedback) {
		Map<String, Object> result = shipmentService.addFeedback(id, feedback);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/setShipmentStatus/{id}")
	public ResponseEntity<?> setStatus(@PathVariable("id") int id, @RequestBody ShipmentDto shipment) {
		Map<String, Object> result = shipmentService.setShipmentStatus(id, shipment);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/assignDeliveryAgent/{id}")
	public ResponseEntity<?> assignAgent(@PathVariable("id") int id, @RequestBody EmployeeDto employeeDto) {
		Map<String, Object> result = shipmentService.assignDeliveryAgent1(id, employeeDto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PutMapping("/assignDeliveryAgent")
	public ResponseEntity<?> assignAgent(@RequestBody EmployeeDto employeeDto) {
		Map<String, Object> result = shipmentService.assignDeliveryAgent(employeeDto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@PostMapping("/getShipmentByStatus")
	public ResponseEntity<?> getByStatus(@RequestBody ShipmentDto shipmentDto) {
		Map<String, Object> result = shipmentService.getShipmentByStatus(shipmentDto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@GetMapping("/getShipmentByEmpId/{id}")
	public ResponseEntity<?> getShipmentByEmpId(@PathVariable("id") int id) {
		List<OrdersDto> result = shipmentService.getShipmentByEmployeeId(id);
		return Response.success(result);
	}

	@GetMapping("/getShipmentById")
	public ResponseEntity<?> getShipmenntUsingId(@RequestBody ShipmentDto shipmentDto) {
		Map<String, Object> result = shipmentService.getShipmentById(shipmentDto);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@GetMapping("/track/{id}")
	public ResponseEntity<?> trackShipment(@PathVariable("id") int id) {
		Map<String, Object> result = shipmentService.trackShipment(id);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}
	
	@PostMapping("/updateTrack/{id}")
	public ResponseEntity<?> updateTracking(@PathVariable("id") int id, @RequestBody Tracking tracking) {
		Map<String, Object> result = shipmentService.updateTrack(id, tracking);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

}
