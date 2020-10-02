package com.SEPT_Backend.Backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Emp_Name")
	private String name;
	
	@Column(name="Service")
	private String service;
	
	@Column(name="Day")
	private String day;
	
	@Column(name="Time")
	private String time;
	
	@Column(name="Status")
	private String status;
	
	public Employee(long id, String name, String service, String day, String time, String status) {
		super();
		this.id = id;
		this.name = name;
		this.service = service;
		this.day = day;
		this.time = time;
		this.status = status;
	}
	
	public Employee() {}
	

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the service
	 */
	public String getService() {
		return service;
	}

	/**
	 * @param service the service to set
	 */
	public void setService(String service) {
		this.service = service;
	}

	/**
	 * @return the date
	 */
	public String getDay() {
		return day;
	}

	/**
	 * @param date the date to set
	 */
	public void setDay(String date) {
		this.day = date;
	}

	/**
	 * @return the time
	 */
	public String getTime() {
		return time;
	}

	/**
	 * @param time the time to set
	 */
	public void setTime(String time) {
		this.time = time;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	
	
	

}
