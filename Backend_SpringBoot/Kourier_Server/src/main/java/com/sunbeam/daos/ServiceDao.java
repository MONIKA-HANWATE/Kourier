package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Service;

public interface ServiceDao extends JpaRepository<Service, Integer> {
	Service findByServiceId(int id);
}
