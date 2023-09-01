package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Enquiry;

public interface EnquiryDao extends JpaRepository<Enquiry, Integer> {
	List<Enquiry> findAll();
}
