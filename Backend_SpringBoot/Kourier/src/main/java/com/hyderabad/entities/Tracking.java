package com.hyderabad.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tracking")
@JsonIgnoreProperties({ "shipment" })
public class Tracking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tracking_id")
	private int trackingId;

	@Column(name = "new_location")
	private String newLocation;

	@Column(name = "activity")
	private String activity;

	@Column(name = "date", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	@ManyToOne()
	@JoinColumn(name = "FK_shipment_id")
	private Shipment shipment;

	public int getTrackingId() {
		return trackingId;
	}

	public void setTrackingId(int trackingId) {
		this.trackingId = trackingId;
	}

	public String getNewLocation() {
		return newLocation;
	}

	public void setNewLocation(String newLocation) {
		this.newLocation = newLocation;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Shipment getShipment() {
		return shipment;
	}

	public void setShipment(Shipment shipment) {
		this.shipment = shipment;
	}

	@Override
	public String toString() {
		return "Tracking [trackingId=" + trackingId + ", newLocation=" + newLocation + ", activity=" + activity
				+ ", date=" + date + "]";
	}

}
