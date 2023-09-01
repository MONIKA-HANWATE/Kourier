package com.hyderabad.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyderabad.entities.Service;

public interface ServiceDao extends JpaRepository<Service, Integer> {
	Service findByServiceId(int id);
}
