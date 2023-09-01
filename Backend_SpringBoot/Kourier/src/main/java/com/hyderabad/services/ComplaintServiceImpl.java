package com.hyderabad.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hyderabad.daos.ComplaintDao;
import com.hyderabad.entities.Complaint;

@Transactional
@Service
public class ComplaintServiceImpl {
	@Autowired
	ComplaintDao complaintDao;

	public Map<String, Object> updateComplaintStatus(int id, Complaint complaint) {
		Complaint complaint1 = complaintDao.findBycomplaintsId(id);
		System.out.println(complaint);
		complaint1.setComplaintStatus(complaint.getComplaintStatus());
		complaintDao.save(complaint1);
		return Collections.singletonMap("insertedId", complaint1.getComplaintsId());
	}

	public Map<String, Object> getComplaintById(int id) {
		Complaint complaint1 = complaintDao.findBycomplaintsId(id);
		return Collections.singletonMap("complaint", complaint1);
	}

	public Map<String, Object> findAll() {
		List<Complaint> complaints = complaintDao.findAll();
		return Collections.singletonMap("complaints", complaints);
	}

}
