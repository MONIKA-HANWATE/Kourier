package com.hyderabad.dtos;

public class OrdersDto {
	
    private int shipmentId;
	private String senderName;
	private String senderCompanyName;
	private String senderPhone;
	private String senderEmail;
	private String senderAddressLine1;
	private String senderAddressLine2;
	private String senderPincode;
	private String senderCity;
	private String senderState;
	private String senderCountry;
	private String receiverName;
	private String receiverCompanyName;
	private String receiverPhone;
	private String receiverEmail;
	private String receiverAddressLine1;
	private String receiverAddressLine2;
	private String receiverPincode;
	private String receiverCity;
	private String receiverState;
	private String receiverCountry;
	private String shipmentStatus;
	
	
	public OrdersDto() {
	}
	
	public OrdersDto(int shipmentId, String senderName, String senderCompanyName, String senderPhone,
			String senderEmail, String senderAddressLine1, String senderAddressLine2, String senderPincode,
			String senderCity, String senderState, String senderCountry, String receiverName,
			String receiverCompanyName, String receiverPhone, String receiverEmail, String receiverAddressLine1,
			String receiverAddressLine2, String receiverPincode, String receiverCity, String receiverState,
			String receiverCountry, String shipmentStatus) {
		this.shipmentId = shipmentId;
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
		this.shipmentStatus = shipmentStatus;
	}
	@Override
	public String toString() {
		return "OrdersDto [shipmentId=" + shipmentId + ", senderName=" + senderName + ", senderCompanyName="
				+ senderCompanyName + ", senderPhone=" + senderPhone + ", senderEmail=" + senderEmail
				+ ", senderAddressLine1=" + senderAddressLine1 + ", senderAddressLine2=" + senderAddressLine2
				+ ", senderPincode=" + senderPincode + ", senderCity=" + senderCity + ", senderState=" + senderState
				+ ", senderCountry=" + senderCountry + ", receiverName=" + receiverName + ", receiverCompanyName="
				+ receiverCompanyName + ", receiverPhone=" + receiverPhone + ", receiverEmail=" + receiverEmail
				+ ", receiverAddressLine1=" + receiverAddressLine1 + ", receiverAddressLine2=" + receiverAddressLine2
				+ ", receiverPincode=" + receiverPincode + ", receiverCity=" + receiverCity + ", receiverState="
				+ receiverState + ", receiverCountry=" + receiverCountry + ", shipmentStatus=" + shipmentStatus + "]";
	}
	public int getShipmentId() {
		return shipmentId;
	}
	public void setShipmentId(int shipmentId) {
		this.shipmentId = shipmentId;
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
	public String getShipmentStatus() {
		return shipmentStatus;
	}
	public void setShipmentStatus(String shipmentStatus) {
		this.shipmentStatus = shipmentStatus;
	}
	
	
	
}
