package com.hyderabad.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "shipment")
public class Shipment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "shipment_id")
	private int shipmentId;

	@Column(name = "shipment_status")
	private String shipmentStatus;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_timestamp", insertable = false)
	private Date createdTimeStamp;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "pickup_date")
	private Date pickUpDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "estimated_delivery_date")
	private Date estimatedDeliveryDate;

	@Column(name = "sender_name")
	private String senderName;

	@Column(name = "sender_company_name")
	private String senderCompanyName;

	@Column(name = "sender_phone")
	private String senderPhone;

	@Column(name = "sender_email")
	private String senderEmail;

	@Column(name = "sender_address_line1")
	private String senderAddressLine1;

	@Column(name = "sender_address_line2")
	private String senderAddressLine2;

	@Column(name = "sender_pin_code")
	private String senderPincode;

	@Column(name = "sender_city")
	private String senderCity;

	@Column(name = "sender_state")
	private String senderState;

	@Column(name = "sender_country")
	private String senderCountry;

	@Column(name = "receiver_name")
	private String receiverName;

	@Column(name = "receiver_company_name")
	private String receiverCompanyName;

	@Column(name = "receiver_phone")
	private String receiverPhone;

	@Column(name = "receiver_email")
	private String receiverEmail;

	@Column(name = "receiver_address_line1")
	private String receiverAddressLine1;

	@Column(name = "receiver_address_line2")
	private String receiverAddressLine2;

	@Column(name = "receiver_pin_code")
	private String receiverPincode;

	@Column(name = "receiver_city")
	private String receiverCity;

	@Column(name = "receiver_state")
	private String receiverState;

	@Column(name = "receiver_country")
	private String receiverCountry;

	@ManyToOne()
	@JoinColumn(name = "FK_service_id")
	private Service service;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_parcel_id")
	private Parcel parcel;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_payment_id")
	private Payment payment;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_complaint_id")
	private Complaint complaint;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_feedback_id")
	private Feedback feedback;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_user_id")
	private User user;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_employee_id")
	private Employee employee;

	@OneToMany(mappedBy = "shipment", cascade=CascadeType.ALL)
	private List<Tracking> tracking;

	public List<Tracking> getTracking() {
		return tracking;
	}

	public void setTracking(List<Tracking> tracking) {
		this.tracking = tracking;
	}

	public int getShipmentId() {
		return shipmentId;
	}

	public void setShipmentId(int shipmentId) {
		this.shipmentId = shipmentId;
	}

	public String getShipmentStatus() {
		return shipmentStatus;
	}

	public void setShipmentStatus(String shipmentStatus) {
		this.shipmentStatus = shipmentStatus;
	}

	public Date getCreatedTimeStamp() {
		return createdTimeStamp;
	}

	public void setCreatedTimeStamp(Date createdTimeStamp) {
		this.createdTimeStamp = createdTimeStamp;
	}

	public Service getService() {
		return service;
	}

	public Date getPickUpDate() {
		return pickUpDate;
	}

	public void setPickUpDate(Date pickUpDate) {
		this.pickUpDate = pickUpDate;
	}

	public Date getEstimatedDeliveryDate() {
		return estimatedDeliveryDate;
	}

	public void setEstimatedDeliveryDate(Date estimatedDeliveryDate) {
		this.estimatedDeliveryDate = estimatedDeliveryDate;
	}

	public void setService(Service service) {
		this.service = service;
	}

	public Parcel getParcel() {
		return parcel;
	}

	public void setParcel(Parcel parcel) {
		this.parcel = parcel;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public Complaint getComplaint() {
		return complaint;
	}

	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public String getSenderName() {
		return senderName;
	}

	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}

	public String getSenderCompanyName() {
		return senderCompanyName;
	}

	public void setSenderCompanyName(String senderCompanyName) {
		this.senderCompanyName = senderCompanyName;
	}

	public String getSenderPhone() {
		return senderPhone;
	}

	public void setSenderPhone(String senderPhone) {
		this.senderPhone = senderPhone;
	}

	public String getSenderEmail() {
		return senderEmail;
	}

	public void setSenderEmail(String senderEmail) {
		this.senderEmail = senderEmail;
	}

	public String getSenderAddressLine1() {
		return senderAddressLine1;
	}

	public void setSenderAddressLine1(String senderAddressLine1) {
		this.senderAddressLine1 = senderAddressLine1;
	}

	public String getSenderAddressLine2() {
		return senderAddressLine2;
	}

	public void setSenderAddressLine2(String senderAddressLine2) {
		this.senderAddressLine2 = senderAddressLine2;
	}

	public String getSenderPincode() {
		return senderPincode;
	}

	public void setSenderPincode(String senderPincode) {
		this.senderPincode = senderPincode;
	}

	public String getSenderCity() {
		return senderCity;
	}

	public void setSenderCity(String senderCity) {
		this.senderCity = senderCity;
	}

	public String getSenderState() {
		return senderState;
	}

	public void setSenderState(String senderState) {
		this.senderState = senderState;
	}

	public String getSenderCountry() {
		return senderCountry;
	}

	public void setSenderCountry(String senderCountry) {
		this.senderCountry = senderCountry;
	}

	public String getReceiverName() {
		return receiverName;
	}

	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}

	public String getReceiverCompanyName() {
		return receiverCompanyName;
	}

	public void setReceiverCompanyName(String receiverCompanyName) {
		this.receiverCompanyName = receiverCompanyName;
	}

	public String getReceiverPhone() {
		return receiverPhone;
	}

	public void setReceiverPhone(String receiverPhone) {
		this.receiverPhone = receiverPhone;
	}

	public String getReceiverEmail() {
		return receiverEmail;
	}

	public void setReceiverEmail(String receiverEmail) {
		this.receiverEmail = receiverEmail;
	}

	public String getReceiverAddressLine1() {
		return receiverAddressLine1;
	}

	public void setReceiverAddressLine1(String receiverAddressLine1) {
		this.receiverAddressLine1 = receiverAddressLine1;
	}

	public String getReceiverAddressLine2() {
		return receiverAddressLine2;
	}

	public void setReceiverAddressLine2(String receiverAddressLine2) {
		this.receiverAddressLine2 = receiverAddressLine2;
	}

	public String getReceiverPincode() {
		return receiverPincode;
	}

	public void setReceiverPincode(String receiverPincode) {
		this.receiverPincode = receiverPincode;
	}

	public String getReceiverCity() {
		return receiverCity;
	}

	public void setReceiverCity(String receiverCity) {
		this.receiverCity = receiverCity;
	}

	public String getReceiverState() {
		return receiverState;
	}

	public void setReceiverState(String receiverState) {
		this.receiverState = receiverState;
	}

	public String getReceiverCountry() {
		return receiverCountry;
	}

	public void setReceiverCountry(String receiverCountry) {
		this.receiverCountry = receiverCountry;
	}

	public Feedback getFeedback() {
		return feedback;
	}

	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}

	public Shipment(int shipmentId, String shipmentStatus, Date createdTimeStamp, Date pickUpDate,
			Date estimatedDeliveryDate, String senderName, String senderCompanyName, String senderPhone,
			String senderEmail, String senderAddressLine1, String senderAddressLine2, String senderPincode,
			String senderCity, String senderState, String senderCountry, String receiverName,
			String receiverCompanyName, String receiverPhone, String receiverEmail, String receiverAddressLine1,
			String receiverAddressLine2, String receiverPincode, String receiverCity, String receiverState,
			String receiverCountry, Service service, Parcel parcel, Payment payment, Complaint complaint,
			Feedback feedback, User user, Employee employee) {
		this.shipmentId = shipmentId;
		this.shipmentStatus = shipmentStatus;
		this.createdTimeStamp = createdTimeStamp;
		this.pickUpDate = pickUpDate;
		this.estimatedDeliveryDate = estimatedDeliveryDate;
		this.senderName = senderName;
		this.senderCompanyName = senderCompanyName;
		this.senderPhone = senderPhone;
		this.senderEmail = senderEmail;
		this.senderAddressLine1 = senderAddressLine1;
		this.senderAddressLine2 = senderAddressLine2;
		this.senderPincode = senderPincode;
		this.senderCity = senderCity;
		this.senderState = senderState;
		this.senderCountry = senderCountry;
		this.receiverName = receiverName;
		this.receiverCompanyName = receiverCompanyName;
		this.receiverPhone = receiverPhone;
		this.receiverEmail = receiverEmail;
		this.receiverAddressLine1 = receiverAddressLine1;
		this.receiverAddressLine2 = receiverAddressLine2;
		this.receiverPincode = receiverPincode;
		this.receiverCity = receiverCity;
		this.receiverState = receiverState;
		this.receiverCountry = receiverCountry;
		this.service = service;
		this.parcel = parcel;
		this.payment = payment;
		this.complaint = complaint;
		this.feedback = feedback;
		this.user = user;
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "Shipment [shipmentId=" + shipmentId + ", shipmentStatus=" + shipmentStatus + ", createdTimeStamp="
				+ createdTimeStamp + ", pickUpDate=" + pickUpDate + ", estimatedDeliveryDate=" + estimatedDeliveryDate
				+ ", senderName=" + senderName + ", senderCompanyName=" + senderCompanyName + ", senderPhone="
				+ senderPhone + ", senderEmail=" + senderEmail + ", senderAddressLine1=" + senderAddressLine1
				+ ", senderAddressLine2=" + senderAddressLine2 + ", senderPincode=" + senderPincode + ", senderCity="
				+ senderCity + ", senderState=" + senderState + ", senderCountry=" + senderCountry + ", receiverName="
				+ receiverName + ", receiverCompanyName=" + receiverCompanyName + ", receiverPhone=" + receiverPhone
				+ ", receiverEmail=" + receiverEmail + ", receiverAddressLine1=" + receiverAddressLine1
				+ ", receiverAddressLine2=" + receiverAddressLine2 + ", receiverPincode=" + receiverPincode
				+ ", receiverCity=" + receiverCity + ", receiverState=" + receiverState + ", receiverCountry="
				+ receiverCountry + ", employee=" + employee + "]";
	}

	public Shipment() {
		this.tracking = new ArrayList<Tracking>();
	}

}
