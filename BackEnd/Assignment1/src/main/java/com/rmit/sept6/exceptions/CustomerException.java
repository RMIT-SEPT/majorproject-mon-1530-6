package com.rmit.sept6.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
@ResponseStatus(HttpStatus.BAD_REQUEST)

public class CustomerException extends RuntimeException{
	public CustomerException(String message) {
        super(message);
    }

}
