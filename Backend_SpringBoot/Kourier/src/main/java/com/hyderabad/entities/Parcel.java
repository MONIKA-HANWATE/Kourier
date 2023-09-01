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
@Table(name = "parcel")
@JsonIgnoreProperties({ "shipment" })
public class Parcel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "parcel_id")
	private int parcelId;

	@Column(name = "parcel_name")
	private String parcelName;

	private String description;

	private int length;

	private int width;

	private int height;

	@Column(name = "weight")
	private double weight;

	@OneToOne(mappedBy = "parcel")
	private Shipment shipment;

	public int getParcelId() {
		return parcelId;
	}

	public void setParcelId(int parcelId) {
		this.parcelId = parcelId;
	}

	public String getParcelName() {
		return parcelName;
	}

	public void setParcelName(String parcelName) {
		this.parcelName = parcelName;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public Shipment getShipment() {
		return shipment;
	}

	public void setShipment(Shipment shipment) {
		this.shipment = shipment;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Parcel [parcelId=" + parcelId + ", parcelName=" + parcelName + ", length=" + length + ", width=" + width
				+ ", height=" + height + ", weight=" + weight + ", shipment=" + shipment + "]";
	}

}
