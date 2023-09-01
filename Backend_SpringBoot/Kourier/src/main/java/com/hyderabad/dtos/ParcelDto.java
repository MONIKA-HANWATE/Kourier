package com.hyderabad.dtos;

import com.hyderabad.entities.Parcel;

public class ParcelDto {
	
	Parcel parcel;
	private int serviceId;
	
	public Parcel getParcel() {
		return parcel;
	}
	public void setParcel(Parcel parcel) {
		this.parcel = parcel;
	}
	public int getServiceId() {
		return serviceId;
	}
	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}
	
	
}
