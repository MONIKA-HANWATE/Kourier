package com.sunbeam.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.EnquiryDao;
import com.sunbeam.entities.Enquiry;

@Transactional
@Service
public class EnquiryServiceImpl {

	@Autowired
	private EnquiryDao enquiryDao;

	public Map<String, Object> postEnquiry(Enquiry enquiry) {
		enquiryDao.save(enquiry);
		return Collections.singletonMap("success", enquiry.getQueryId());
	}

	public Map<String, Object> findAll() {
		List<Enquiry> enquiries = enquiryDao.findAll();
		return Collections.singletonMap("enquiries", enquiries);
	}
}
