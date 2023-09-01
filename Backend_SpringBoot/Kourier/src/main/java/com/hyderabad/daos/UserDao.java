package com.hyderabad.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyderabad.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	
	User findByUserId(int id);
	User findByEmail(String email);
	User findByEmailAndPassword(String email, String password);
}
