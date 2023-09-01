package com.hyderabad.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "user")
@JsonIgnoreProperties({"shipments"})
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "name")
	private String name;

	@Column(name = "company_name")
	private String companyName;

	@Column(name = "phone")
	private String phone;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "address_line1")
	private String addressLine1;

	@Column(name = "address_line2")
	private String addressLine2;

	@Column(name = "pin_code")
	private String pincode;

	@Column(name = "city_name")
	private String city;

	@Column(name = "state_name")
	private String state;

	@Column(name = "country_name")
	private String country;

	@Column(name = "account_status", insertable = false)
	private int accountStatus;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_timestamp", insertable = false)
	private Date createdTimestamp;

	@OneToMany(mappedBy = "user")
	private List<Shipment> shipments;

	public User() {
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
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

	public int getAccountStatus() {
		return accountStatus;
	}

	public void setAccountStatus(int accountStatus) {
		this.accountStatus = accountStatus;
	}

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	public List<Shipment> getShipments() {
		return shipments;
	}

	public void setShipments(List<Shipment> shipments) {
		this.shipments = shipments;
	}

	public User(int userId, String name, String companyName, String phone, String email, String password,
			String addressLine1, String addressLine2, String pincode, String city, String state, String country,
			int accountStatus, Date createdTimestamp, List<Shipment> shipments) {
		this.userId = userId;
		this.name = name;
		this.companyName = companyName;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.city = city;
		this.state = state;
		this.country = country;
		this.accountStatus = accountStatus;
		this.createdTimestamp = createdTimestamp;
		this.shipments = shipments;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", companyName=" + companyName + ", phone=" + phone
				+ ", email=" + email + ", password=" + password + ", addressLine1=" + addressLine1 + ", addressLine2="
				+ addressLine2 + ", pincode=" + pincode + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", accountStatus=" + accountStatus + ", createdTimestamp=" + createdTimestamp + ", shipments="
				+ shipments + "]";
	}

}
