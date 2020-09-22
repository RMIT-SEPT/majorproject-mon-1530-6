package com.SEPT_Backend.Backend.payload.request;

import javax.validation.constraints.NotBlank;

public class InfoRequest {

	
	@NotBlank
	private String username;

	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	
	
}
