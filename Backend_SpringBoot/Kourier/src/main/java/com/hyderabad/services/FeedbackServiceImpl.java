package com.hyderabad.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyderabad.daos.FeedbackDao;
import com.hyderabad.entities.Feedback;

@Transactional
@Service
public class FeedbackServiceImpl {

	@Autowired
	private FeedbackDao feedbackDao;

	public Map<String, Object> findAll() {
		List<Feedback> feedbacks = feedbackDao.findAll();
		return Collections.singletonMap("feedbacks", feedbacks);
	}
}
