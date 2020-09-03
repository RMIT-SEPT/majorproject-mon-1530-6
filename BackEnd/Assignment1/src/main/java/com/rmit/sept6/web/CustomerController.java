package com.rmit.sept6.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rmit.sept6.model.Customer;
import com.rmit.sept6.services.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("")
	public ResponseEntity<?> createNewCustomer(@RequestBody Customer customer, BindingResult result)
	{
		if(result.hasErrors())
		{
			Map<String, String> errorMap = new HashMap<>();
			for(FieldError error: result.getFieldErrors())
			{
				return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
			}
		}
		Customer cus = customerService.saveOrUpdateCustomer(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
	}
	
}
