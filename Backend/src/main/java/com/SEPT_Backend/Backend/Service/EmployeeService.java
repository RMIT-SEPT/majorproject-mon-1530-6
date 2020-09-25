package com.SEPT_Backend.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.repository.BookingRepository;
import com.SEPT_Backend.Backend.repository.EmployeeRepository;

public class EmployeeService {
	
	
	@Autowired
	private EmployeeRepository  employeeRepo ;

	public Employee saveBooking(Employee employee) {
		return employeeRepo.save(employee);
	}

}
