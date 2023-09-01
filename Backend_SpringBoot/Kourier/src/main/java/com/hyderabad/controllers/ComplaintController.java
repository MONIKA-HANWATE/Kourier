package com.hyderabad.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyderabad.dtos.Response;
import com.hyderabad.entities.Complaint;
import com.hyderabad.services.ComplaintServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/complaint")
public class ComplaintController {
	
	@Autowired
	private ComplaintServiceImpl complaintService; 
	

	@PutMapping("/updateComplaintStatus/{id}")
	public ResponseEntity<?> updateComplaintStatus(@PathVariable("id") int id, @RequestBody Complaint complaintStatus) {
		Map<String, Object> result = complaintService.updateComplaintStatus(id, complaintStatus);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}
	
	@GetMapping("/viewAll")
	public ResponseEntity<?> getShipments() {
		Map<String, Object> result = complaintService.findAll();
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}
	
	
	@GetMapping("/getComplaint/{id}")
	public ResponseEntity<?>getComplaint(@PathVariable("id") int id){
		Map<String, Object> result = complaintService.getComplaintById(id);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}
	
}
