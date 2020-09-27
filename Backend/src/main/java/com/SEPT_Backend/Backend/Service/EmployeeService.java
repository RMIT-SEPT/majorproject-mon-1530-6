package com.SEPT_Backend.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.repository.BookingRepository;
import com.SEPT_Backend.Backend.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	
	@Autowired
	private EmployeeRepository  employeeRepo ;

	public Employee saveBooking(Employee employee) {
		return employeeRepo.save(employee);
	}
	
	public List<String> getService()
	{
		return employeeRepo.getService();
	}

	public List<String> getDay(String service)
	{
		return employeeRepo.getDay(service);
	}
	
	
	public List<String> getTime(String service, String day)
	{
		return employeeRepo.getTime(service,day);
	}
	
	
	public List<String> getServiceProvider(String service,String day, String time)
	{
		return employeeRepo.getServiceProvider(service,day,time);
	}
	
	
	
	

}
