package com.SEPT_Backend.Backend.payload.request;

import java.util.List;

import javax.validation.constraints.NotBlank;

//Used in Employee Controller, passed as a paramater

public class EmployeeRequest {

  @NotBlank
  private String name;

  @NotBlank
  private List < String > service;

  @NotBlank
  private List < String > day;

  @NotBlank
  private List < String > time;

  @NotBlank
  private String status;

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
  public List < String > getService() {
    return service;
  }

  /**
	 * @param service the service to set
	 */
  public void setService(List < String > service) {
    this.service = service;
  }

  /**
	 * @return the day
	 */
  public List < String > getDay() {
    return day;
  }

  /**
	 * @param day the day to set
	 */
  public void setDay(List < String > day) {
    this.day = day;
  }

  /**
	 * @return the time
	 */
  public List < String > getTime() {
    return time;
  }

  /**
	 * @param time the time to set
	 */
  public void setTime(List < String > time) {
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