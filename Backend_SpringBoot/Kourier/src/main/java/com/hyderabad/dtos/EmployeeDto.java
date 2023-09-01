package com.hyderabad.dtos;

public class EmployeeDto {
	private int employeeId;
	private String name;
	private String phone;
	private String email;
	private String city;
	private String state;
	private String country;
	private String accountStatus;
	private String companyName;
	private String workStatus;
	private String role;
	private String password;
	private int shipmentId;
	
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getWorkStatus() {
		return workStatus;
	}
	public void setWorkStatus(String workStatus) {
		this.workStatus = workStatus;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getShipmentId() {
		return shipmentId;
	}
	public void setShipmentId(int shipmentId) {
		this.shipmentId = shipmentId;
	}
	public EmployeeDto(int employeeId, String name, String phone, String email, String city, String state,
			String country, String accountStatus, String companyName, String workStatus, String role, String password,
			int shipmentId) {
		this.employeeId = employeeId;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.city = city;
		this.state = state;
		this.country = country;
		this.accountStatus = accountStatus;
		this.companyName = companyName;
		this.workStatus = workStatus;
		this.role = role;
		this.password = password;
		this.shipmentId = shipmentId;
	}
	@Override
	public String toString() {
		return "EmployeeDto [employeeId=" + employeeId + ", name=" + name + ", phone=" + phone + ", email=" + email
				+ ", city=" + city + ", state=" + state + ", country=" + country + ", accountStatus=" + accountStatus
				+ ", companyName=" + companyName + ", workStatus=" + workStatus + ", role=" + role + ", password="
				+ password + ", shipmentId=" + shipmentId + "]";
	}
	public EmployeeDto() {
	}
	
	
}