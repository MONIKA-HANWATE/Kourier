package com.hyderabad.dtos;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class SchedulePickUp {
	@JsonFormat
	(shape = JsonFormat.Shape.STRING)
	private Date pickUpDate;

	public Date getPickUpDate() {
		return pickUpDate;
	}

	public void setPickUpDate(Date pickUpDate) {
		this.pickUpDate = pickUpDate;
	}

}
