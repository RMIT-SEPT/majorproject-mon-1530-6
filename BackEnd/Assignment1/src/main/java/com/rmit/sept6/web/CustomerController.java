package com.rmit.sept6.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
		 ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
	        if(errorMap!=null) return errorMap;
	        
		Customer cus = customerService.saveOrUpdateCustomer(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.CREATED);
	}
	
	@GetMapping("/{customerId}")
    public ResponseEntity<?> getCustomerById(@PathVariable String customerId


    ){

        Customer customer = customerService.findByCustomerIdentifier(customerId);

        return new ResponseEntity<Customer>(customer, HttpStatus.OK);
    }


    @GetMapping("/all")
    public Iterable<Customer> getAllPersons(){return

            customerService.findAllPersons();}


    @DeleteMapping("/{customerId}")
    public ResponseEntity<?> deleteProject(@PathVariable String customerId){
        customerService.deletePersonByIdentifier(customerId);

        return new ResponseEntity<String>("Customer with ID: '"+customerId+"' was deleted", HttpStatus.OK);
    }
}
