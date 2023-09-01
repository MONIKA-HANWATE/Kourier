package com.hyderabad.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "enquiry")
public class Enquiry {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "query_id")
	private int queryId;

	@Column(name = "email")
	private String email;

	@Column(name = "query")
	private String query;

	public int getQueryId() {
		return queryId;
	}

	public void setQueryId(int queryId) {
		this.queryId = queryId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public Enquiry(int queryId, String email, String query) {
		this.queryId = queryId;
		this.email = email;
		this.query = query;
	}

	@Override
	public String toString() {
		return "Enquiry [queryId=" + queryId + ", email=" + email + ", query=" + query + "]";
	}

	public Enquiry() {
	}

	
}
