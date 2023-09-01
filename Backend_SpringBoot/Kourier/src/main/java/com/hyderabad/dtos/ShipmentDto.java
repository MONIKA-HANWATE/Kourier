
package com.hyderabad.dtos;

public class ShipmentDto {
	
private String shipmentStatus;
private int employeeId;
private int shipmentId;

public String getShipmentStatus() {
	return shipmentStatus;
}
public void setShipmentStatus(String shipmentStatus) {
	this.shipmentStatus = shipmentStatus;
}
public int getEmployeeId() {
	return employeeId;
}
public void setEmployeeId(int employeeId) {
	this.employeeId = employeeId;
}
public int getShipmentId() {
	return shipmentId;
}
public void setShipmentId(int shipmentId) {
	this.shipmentId = shipmentId;
}

public ShipmentDto(String shipmentStatus, int employeeId, int shipmentId) {
	this.shipmentStatus = shipmentStatus;
	this.employeeId = employeeId;
	this.shipmentId = shipmentId;
}


public ShipmentDto() {
}

@Override
public String toString() {
	return "ShipmentDto [shipmentStatus=" + shipmentStatus + ", employeeId=" + employeeId + ", shipmentId=" + shipmentId
			+ "]";
}





	
}
