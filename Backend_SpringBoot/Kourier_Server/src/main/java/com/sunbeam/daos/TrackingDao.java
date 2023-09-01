package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Tracking;

public interface TrackingDao extends JpaRepository<Tracking, Integer> {

}
