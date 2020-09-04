package com.rmit.sept6.web;

import com.rmit.sept6.model.Customer;
import com.rmit.sept6.services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

	@Autowired
	private CustomerServices customerService;
	
	@PostMapping("")
	public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer, BindingResult result ) {
		if ( result.hasErrors() ) {
			return new ResponseEntity<String>("Invalid Customer Object", HttpStatus.BAD_REQUEST);
		}
		
		Customer customerOther = customerService.saveOrUpdateCustomer(customer);
		return new ResponseEntity<Customer>( customer, HttpStatus.CREATED);
	}
}
