package com.hyderabad.dtos;

public class UpdateEmployeeDto {
	private int employeeId;
	private String name;
	private String phone;
	private String address1;
	private String address2;
	private String pincode;
	private String city;
	private String state;
	private String country;
	private String accountStatus;
	private String deactivateReason;
	private String workStatus;
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAccountStatus() {
		return accountStatus;
	}
	public void setAccountStatus(String accountStatus) {
		this.accountStatus = accountStatus;
	}
	public String getDeactivateReason() {
		return deactivateReason;
	}
	public void setDeactivateReason(String deactivateReason) {
		this.deactivateReason = deactivateReason;
	}
	public String getWorkStatus() {
		return workStatus;
	}
	public void setWorkStatus(String workStatus) {
		this.workStatus = workStatus;
	}
	@Override
	public String toString() {
		return "UpdateEmployeeDto [employeeId=" + employeeId + ", name=" + name + ", phone=" + phone + ", address1="
				+ address1 + ", address2=" + address2 + ", pincode=" + pincode + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", accountStatus=" + accountStatus + ", deactivateReason=" + deactivateReason
				+ ", workStatus=" + workStatus + "]";
	}
	public UpdateEmployeeDto(int employeeId, String name, String phone, String address1, String address2,
			String pincode, String city, String state, String country, String accountStatus, String deactivateReason,
			String workStatus) {
		this.employeeId = employeeId;
		this.name = name;
		this.phone = phone;
		this.address1 = address1;
		this.address2 = address2;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
		this.country = country;
		this.accountStatus = accountStatus;
		this.deactivateReason = deactivateReason;
		this.workStatus = workStatus;
	}
	public UpdateEmployeeDto() {
	}
	
	
}
