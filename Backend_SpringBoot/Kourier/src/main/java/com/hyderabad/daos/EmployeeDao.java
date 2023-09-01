package com.hyderabad.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hyderabad.entities.Employee;


public interface EmployeeDao extends JpaRepository<Employee, Integer> {
	
	Employee findByEmployeeId(int id);
	Employee findByEmail(String email);
	Employee findByEmailAndPassword(String email, String password);
	
	@Query(value ="SELECT * FROM employee WHERE  role = :role", nativeQuery = true)
	List<Employee>findDeliveryAgent(@Param ("role") String role);
	
	
}


