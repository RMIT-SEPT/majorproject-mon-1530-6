package com.rmit.sept6.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept6.model.Employee;
import com.rmit.sept6.repository.EmployeeRepository;
@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee saveOrUpdateEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
}
