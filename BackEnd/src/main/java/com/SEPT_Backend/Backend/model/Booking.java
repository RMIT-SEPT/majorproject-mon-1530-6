package com.SEPT_Backend.Backend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookings")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Service")
	private String service;
	
	
	@Column(name="Time")
	private String time;
	
	@Column(name="Day")
	private String day;
	
	
	@Column(name="Customer_ID")
	private long custId;
	

	public Booking(){
		
		
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public long getcustId() {
		return custId;
	}

	public void setcustId(long custId) {
		this.custId = custId;
	}
	

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}


	public Booking(String name, String time, long custId, String day, String service) {
		super();
		this.name = name;
		this.time = time;
		this.custId = custId;
		this.day = day;
		this.service=service;
	}

	
	
	
	

}
