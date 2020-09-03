package com.rmit.sept6.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept6.model.Customer;
import com.rmit.sept6.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private  CustomerRepository customerRepository;
	
	public Customer saveOrUpdateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
}