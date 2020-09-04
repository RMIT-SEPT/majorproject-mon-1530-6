package com.rmit.sept6.services;

import com.rmit.sept6.model.Customer;
import com.rmit.sept6.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServices {
	@Autowired
	private CustomerRepository customerRepository;
	
	public Customer saveOrUpdateCustomer( Customer customer ) {
		
		//logic
		return customerRepository.save(customer);
	}
}
