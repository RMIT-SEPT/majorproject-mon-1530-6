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
  private EmployeeRepository employeeRepo;

  @Autowired
  private BookingRepository bookingRepo;

  //save booking with the employee
  public Employee saveBooking(Employee employee) {
    return employeeRepo.save(employee);
  }

  //get the service from the database
  public List < String > getService() {
    return employeeRepo.getService();
  }

  //get the days working of an employee
  public List < String > getDay(String service) {
    return employeeRepo.getDay(service);
  }
  
  //get the name of employee working for passed paramaters
  public List < String > getServiceProvider(String service, String day, String time) {
	return employeeRepo.getServiceProvider(service, day, time);
	}

  //get time assigned for an employee 
  public List < String > getTime(String service, String day) {
    return employeeRepo.getTime(service, day);
  }

  //get the employee name
  public List < String > getEmployeeName() {
    return employeeRepo.getEmployeeName();
  }

  //check if the same booking already exists to prevent redundancy
  public boolean checkEmployee(String name, String day, String time) {
    List < String > list = employeeRepo.checkEmployee(name, day, time);
    if (list.size() > 0) return false;
    else return true;
  }

  //change status in the database to 'pending' when booked yet needs to be approved
  public void updateEmployee(String name, String service, String day, String time) {
    employeeRepo.updateEmployee(name, service, day, time);
  }

  //change status in the DB to 'unavailable' as already booked and approved
  public void approve(String name, String service, String day, String time) {
    employeeRepo.approve(name, service, day, time);
  }

  //change status in DB to 'available' as the booking is rejected
  public void reject(String name, String service, String day, String time) {
    employeeRepo.reject(name, service, day, time);
  }

  //get list of bookings where status is 'confirmed' and assigned to an employee
  public List < Booking > confirmedWork(String name) {
    return bookingRepo.confirmedWork(name);
  }

  //get the working hours of an employee
  public List < Employee > AllWorkingHours(String username) {
    return employeeRepo.AllWorkingHours(username);
  }

}