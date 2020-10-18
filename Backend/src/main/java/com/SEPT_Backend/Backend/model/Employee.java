package com.SEPT_Backend.BackEnd.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 * Employee details are stored here 
 */
@Entity
@Table(name = "Employee")
public class Employee {

  @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "Emp_Name")
  private String name;

  @Column(name = "Service")
  private String service;

  @Column(name = "Day")
  private String day;

  @Column(name = "Time")
  private String time;

  @Column(name = "Status")
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

  
  public String getService() {
    return service;
  }

  
  public void setService(String service) {
    this.service = service;
  }

  
  public String getDay() {
    return day;
  }

  
  public void setDay(String date) {
    this.day = date;
  }

  
  public String getTime() {
    return time;
  }

 
  public void setTime(String time) {
    this.time = time;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

}