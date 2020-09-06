package com.rmit.sept6.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept6.exceptions.CustomerException;
import com.rmit.sept6.model.Customer;
import com.rmit.sept6.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private  CustomerRepository customerRepository;
	
	 public Customer saveOrUpdateCustomer(Customer customer) {

	        try{
	            customer.setUsername(customer.getUsername());
	            return customerRepository.save(customer);
	        }catch (Exception e){
	            throw new CustomerException("Customer Username '"+customer.getUsername()+"' already exists");
	        }

	    }


	    public Customer findByCustomerUsername(String customerUn){

	    	Customer customer = customerRepository.findByCustomerUsername(customerUn);

	        if(customer == null){
	            throw new CustomerException("Customer Username '"+customerUn+"' does not exist");

	        }


	        return customer;
	    }

	    public Iterable<Customer> findAllCustomers(){
	        return customerRepository.findAll();
	    }


	    public void deletePersonByUsername(String customerUn){
	    	Customer customer = customerRepository.findByCustomerUsername(customerUn);

	        if(customer == null){
	            throw  new  CustomerException("Cannot Customer with ID '"+customerUn+"'. This customer does not exist");
	        }

	        customerRepository.delete(customer);
	    }
	}