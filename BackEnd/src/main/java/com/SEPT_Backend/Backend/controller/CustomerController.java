package com.SEPT_Backend.Backend.controller;

import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SEPT_Backend.Backend.Service.UserService;
import com.SEPT_Backend.Backend.model.User;
import com.SEPT_Backend.Backend.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
	
	@Autowired
	public UserService userService;
	
	

	@GetMapping("/allcustomers")
	public List<User> getCustomerDetails()
	{
		return userService.getCustomerDetails();
	}
	
	
	
}
