package com.SEPT_Backend.BackEnd.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity@Table(name = "bookings")
/*
 * booking table to store all bookings of customers
 */

public class Booking {

  @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "Name")
  private String name;

  @Column(name = "Service")
  private String service;

  @Column(name = "Time")
  private String time;

  @Column(name = "Day")
  private String day;

  @Column(name = "Username")
  private String username;

  @Column(name = "Status")
  private String status;


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Booking() {
	  
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

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getService() {
    return service;
  }

  public void setService(String service) {
    this.service = service;
  }

  public Booking(String name, String service, String time, String day, String username, String status) {
    super();

    this.name = name;
    this.service = service;
    this.time = time;
    this.day = day;
    this.username = username;
    this.status = status;
  }

}