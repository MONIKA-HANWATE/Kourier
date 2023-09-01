package com.hyderabad.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hyderabad.entities.Shipment;

public interface ShipmentDao extends JpaRepository<Shipment, Integer> {
	
	Shipment findByShipmentId(int id);

	@Query(value = "SELECT * FROM shipment WHERE shipment_status = :shipmentStatus", nativeQuery = true)
	List<Shipment> findByShipmentStatusContaining(@Param("shipmentStatus") String shipmentStatus);

	@Query(value = "SELECT * FROM shipment WHERE FK_employee_id = :employeeId", nativeQuery = true)
	List<Shipment> findShipmentByEmpId(@Param("employeeId") int employeeId);

}
