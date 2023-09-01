package com.hyderabad.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyderabad.entities.Enquiry;

public interface EnquiryDao extends JpaRepository<Enquiry, Integer> {
	List<Enquiry> findAll();
}
