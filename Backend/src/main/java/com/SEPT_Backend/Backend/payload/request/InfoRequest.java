package com.SEPT_Backend.BackEnd.payload.request;

//used in AuthController for logging in user, passed in paramater
public class InfoRequest {

  private String username;

  private String day;

  private String time;

  private String service;

  /**
	 * @return the day
	 */
  public String getDay() {
    return day;
  }

  /**
	 * @param day the day to set
	 */
  public void setDay(String day) {
    this.day = day;
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

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

}