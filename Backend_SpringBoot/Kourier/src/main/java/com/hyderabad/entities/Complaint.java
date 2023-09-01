package com.hyderabad.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "complaint")
@JsonIgnoreProperties({"shipment"})
public class Complaint {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "complaint_id")
	private int complaintsId;

	@Column(name = "description")
	private String description;

	@OneToOne(mappedBy = "complaint", orphanRemoval = true)
	private Shipment shipment;

	@Column(name = "complaint_status")
	private String complaintStatus;

	public int getComplaintsId() {
		return complaintsId;
	}

	public void setComplaintsId(int complaintsId) {
		this.complaintsId = complaintsId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Shipment getShipment() {
		return shipment;
	}

	public void setShipment(Shipment shipment) {
		this.shipment = shipment;
	}

	public String getComplaintStatus() {
		return complaintStatus;
	}

	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}

	public Complaint() {
	}

	public Complaint(int complaintsId, String description, Shipment shipment, String complaintStatus) {
		this.complaintsId = complaintsId;
		this.description = description;
		this.shipment = shipment;
		this.complaintStatus = complaintStatus;
	}

}
