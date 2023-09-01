package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {
	List<Feedback> findAll();
}
