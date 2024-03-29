package com.SEPT_Backend.Backend.payload.request;

import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.*;
 
//used in AuthContoller for signing in a user, passed as a paramater into contoller
public class SignupRequest {

	@Column(name="FirstName")
	private String firstname;
	
	@Column(name="LastName")
	private String lastname;

	@Column(name="Email")
	@Email
	private String email;
	
	@Column(name="Address")
	private String address;
	
	@Column(name="Username")
	private String username;
	
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name="phone")
	private String phone;

	@Column(name="Password")
	private String password;
    
    private Set<String> role;

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<String> getRole() {
		return role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
    
  
}
