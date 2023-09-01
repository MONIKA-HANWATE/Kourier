package com.sunbeam.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dtos.Response;
import com.sunbeam.services.FeedbackServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	@Autowired
	private FeedbackServiceImpl feedbackService;

	@GetMapping("/viewAll")
	public ResponseEntity<?> getShipments() {
		Map<String, Object> result = feedbackService.findAll();
		if (result.containsKey("error"))
			return Response.error(result);
		return Response.success(result);
	}
}
