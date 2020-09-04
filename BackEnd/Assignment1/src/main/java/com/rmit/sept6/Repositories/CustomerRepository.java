package com.rmit.sept6.Repositories;

import com.rmit.sept6.model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepository extends CrudRepository<Customer, Long>{
	
	@Override
	Iterable<Customer> findAllById(Iterable<Long> iterable);

}
