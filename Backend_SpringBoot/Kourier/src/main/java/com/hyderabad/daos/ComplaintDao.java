package com.hyderabad.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyderabad.entities.Complaint;

public interface ComplaintDao extends JpaRepository<Complaint, Integer> {

	Complaint findBycomplaintsId(int id);

	List<Complaint> findAll();

}
