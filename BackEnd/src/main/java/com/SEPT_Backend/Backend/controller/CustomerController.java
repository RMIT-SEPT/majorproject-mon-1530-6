package com.SEPT_Backend.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SEPT_Backend.Backend.model.Customer;
import com.SEPT_Backend.Backend.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {
	
	@Autowired
	public CustomerRepository customerRepository;
	
	// get all customers
	@GetMapping("/customer")
	public List<Customer> getAllCustomer(){
		return customerRepository.findAll();
	}
	
	//create customer rest api
	@PostMapping("/customer")
	public Customer createCustomer(@RequestBody Customer customer)
	{
		return customerRepository.save(customer);
	}
	
	
}
