package com.hyderabad.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyderabad.dtos.Response;
import com.hyderabad.entities.Enquiry;
import com.hyderabad.services.EnquiryServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/enquiry")
public class EnquiryController {

	@Autowired
	private EnquiryServiceImpl enquiryService;

	@PostMapping
	public ResponseEntity<?> enquiry(@RequestBody Enquiry enquiry) {
		Map<String, Object> result = enquiryService.postEnquiry(enquiry);
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

	@GetMapping("/viewAll")
	public ResponseEntity<?> getShipments() {
		Map<String, Object> result = enquiryService.findAll();
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}

}
