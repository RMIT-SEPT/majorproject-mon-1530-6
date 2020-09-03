package com.rmit.sept6.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rmit.sept6.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	
	Customer findByCustomerIdentifier(String customerId);
    @Override
    Iterable<Customer> findAll();
}


