package com.SEPT_Backend.Backend.model;

import java.sql.Time;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

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
	
	@Column(name="Status")
	private Boolean status;
	

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

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}
	

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}


	public Booking(String name, String time, Boolean status, String day, String service) {
		super();
		this.name = name;
		this.time = time;
		this.status = status;
		this.day = day;
		this.service=service;
	}

	
	
	
	

}
