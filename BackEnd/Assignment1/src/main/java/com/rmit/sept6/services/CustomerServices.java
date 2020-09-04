package com.rmit.sept6.services;

<<<<<<< HEAD
import com.rmit.sept6.model.Customer;
import com.rmit.sept6.Repositories.CustomerRepository;
=======
>>>>>>> df45585e92684dec97af0402c63ac53739c432ec
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServices {
	@Autowired
<<<<<<< HEAD
	private CustomerRepository customerRepository;
	
	public Customer saveOrUpdateCustomer( Customer customer ) {
		
		//logic
		return customerRepository.save(customer);
	}
=======
	private CustomerRepository customerRepository
>>>>>>> df45585e92684dec97af0402c63ac53739c432ec
}
