package com.SEPT_Backend.Backend.Service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SEPT_Backend.Backend.model.User;
import com.SEPT_Backend.Backend.repository.CustomerRepository;
import com.SEPT_Backend.Backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository  userRepo ;
	
	
	public List<User> getEmployeeDetails()
	{
		return userRepo.getEmployeeDetails();
	}
	
	
	public List<User> getCustomerDetails()
	{
		return userRepo.getCustomerDetails();
	}
}
