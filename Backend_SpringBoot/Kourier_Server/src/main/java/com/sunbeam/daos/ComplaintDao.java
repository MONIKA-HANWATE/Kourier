package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Complaint;

public interface ComplaintDao extends JpaRepository<Complaint, Integer> {

	Complaint findBycomplaintsId(int id);

	List<Complaint> findAll();

}
