package com.SEPT_Backend.BackEnd.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
/*
 * For a resource that is not found, the folloeing message is printed on the console.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String message)
	{
		super(message);
	}
	

}
