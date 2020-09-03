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
	            customer.setId(customer.getId());
	            return customerRepository.save(customer);
	        }catch (Exception e){
	            throw new CustomerException("Customer ID '"+customer.getId()+"' already exists");
	        }

	    }


	    public Customer findByCustomerIdentifier(String customerId){

	    	Customer customer = customerRepository.findByCustomerIdentifier(customerId);

	        if(customer == null){
	            throw new CustomerException("Customer ID '"+customerId+"' does not exist");

	        }


	        return customer;
	    }

	    public Iterable<Customer> findAllPersons(){
	        return customerRepository.findAll();
	    }


	    public void deletePersonByIdentifier(String customerId){
	    	Customer customer = customerRepository.findByCustomerIdentifier(customerId);

	        if(customer == null){
	            throw  new  CustomerException("Cannot Person with ID '"+customerId+"'. This person does not exist");
	        }

	        customerRepository.delete(customer);
	    }
	}