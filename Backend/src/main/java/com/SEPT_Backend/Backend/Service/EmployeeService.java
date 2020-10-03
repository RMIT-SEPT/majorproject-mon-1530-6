package com.SEPT_Backend.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.model.User;
import com.SEPT_Backend.Backend.repository.BookingRepository;
import com.SEPT_Backend.Backend.repository.CustomerRepository;
import com.SEPT_Backend.Backend.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	
	@Autowired
	private EmployeeRepository  employeeRepo ;
	
	@Autowired
	private BookingRepository bookingRepo;

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
	
	public List<String> getEmployeeName()
	{
		return employeeRepo.getEmployeeName();
	}
	
	public boolean checkEmployee(String name,  String day, String time)
	{
		 List<String> list = employeeRepo.checkEmployee(name,day,time);
		 if(list.size()>0)
		 return false;
		 else 
			 return true;
	}

	public void updateEmployee(String name, String service, String day, String time)
	{
		employeeRepo.updateEmployee(name,service,day,time);
		
	}
	
	public void approve(String name, String service, String day, String time)
	{
		employeeRepo.approve(name,service,day,time);
		
	}
	
	public void reject(String name, String service, String day, String time)
	{
		employeeRepo.reject(name,service,day,time);
		
	}
	
	
	public List<String> getServiceProvider(String service,String day, String time)
	{
		return employeeRepo.getServiceProvider(service,day,time);
	}
	
	
	public List<Booking> confirmedWork(String name)
	{
		return bookingRepo.confirmedWork(name);
		
	}

	public List<Employee> AllWorkingHours(String username) {
		
		return employeeRepo.AllWorkingHours(username);
	}

	
	
	

}
