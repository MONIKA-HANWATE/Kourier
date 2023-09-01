package com.hyderabad.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyderabad.entities.Tracking;

public interface TrackingDao extends JpaRepository<Tracking, Integer> {

}
