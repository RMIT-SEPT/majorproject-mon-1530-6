package com.SEPT_Backend.Backend.payload.response;

/*
 * Error message is displayed from the Auth controller 
 * for credientials that are already taken 
 */
public class MessageResponse {
	private String message;

	public MessageResponse(String message) {
	    this.message = message;
	  }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
