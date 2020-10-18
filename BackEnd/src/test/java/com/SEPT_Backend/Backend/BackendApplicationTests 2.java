package com.SEPT_Backend.Backend;


import static org.junit.Assert.assertEquals;  
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;


import com.SEPT_Backend.Backend.Service.BookingService;
import com.SEPT_Backend.Backend.Service.EmployeeService;
import com.SEPT_Backend.Backend.Service.UserService;
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.repository.BookingRepository;
import com.SEPT_Backend.Backend.repository.CustomerRepository;
import com.SEPT_Backend.Backend.repository.EmployeeRepository;
import com.SEPT_Backend.Backend.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class BackendApplicationTests {
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private UserService userService;
	
	@MockBean
	private BookingRepository bookingRepository;
	
	@MockBean
	private EmployeeRepository employeeRepository;
	
	@MockBean
	private UserRepository userRepository;
	
	
	@Test
	public void getBookingTest() {
		Mockito.when(bookingRepository.findAll()).thenReturn(Stream
				.of(new Booking( "Hair Dying","Jack","Tuesday","13:00","sid","available"),new Booking("Nail Polish","Katie","Friday","16:00","rose","available")).collect(Collectors.toList()));
		assertEquals(2,bookingService.getBookings().size());
		
	}
	
	@Test
	public void getUSerByUsernameTest()
	{
		String username="sid";
		Mockito.when(bookingRepository.findBooking(username)).thenReturn(Stream
				.of(new Booking("Nail Polish","Katie","Friday","16:00","rose", "available")).collect(Collectors.toList()));
		assertEquals(1,bookingService.findBooking(username).size());
		
	}
	
	@Test
	public void checkBookedTest() {
		Mockito.when(bookingRepository.findByDayAndTime("Tuesday", "13:00", "James")).thenReturn(Stream
				.of(new Booking("Nail Polish","James","Tuesday","13:00","rose","available")).collect(Collectors.toList()));
		assertEquals(1,bookingService.findByDayAndTime("Tuesday","13:00","James").size());
		
	}
	
	
	
	@Test
	public void deleteBooking() {
		Booking booking =new Booking("Hair Dying","Jack","Tuesday","13:00","sid","available");
		bookingService.deleteBooking(booking);
		Mockito.verify(bookingRepository,Mockito.times(1)).delete(booking);
	}
	
	/*
	  @Test
	public void saveBookingTest() {
		Booking booking = new Booking("Hair Dying","Jack","Tuesday","13:00","sid");
		Mockito.when(bookingRepository.save(booking)).thenReturn(booking);
		assertEquals(booking,bookingService.saveBooking(booking));
		//assertEquals((Booking)booking,bookingService.saveBooking(booking));
	}
	
	 
	  
	 */
	
	@Test
	public void approveBooking() {
		long id = 1;
		bookingService.approveBooking(id);
		Mockito.verify(bookingRepository,Mockito.times(1)).approveBooking(id);
	}
	
	public void rejectBooking() {
		long id = 1;
		bookingService.approveBooking(id);
		Mockito.verify(bookingRepository,Mockito.times(1)).rejectBooking(id);
	}
	
	
	@Test
	public void updateEmployeeTest() {
		
		employeeService.updateEmployee("Anson", "Hair Dying", "Tuesday", "13:00");
		Mockito.verify(employeeRepository,Mockito.times(1)).updateEmployee("Anson", "Hair Dying", "Tuesday", "13:00");;
	}
	
	@Test
	public void approveEmployeeTest() {
		
		employeeService.approve("Anson", "Hair Dying", "Tuesday", "13:00");
		Mockito.verify(employeeRepository,Mockito.times(1)).approve("Anson", "Hair Dying", "Tuesday", "13:00");;
	}
	
	@Test
	public void rejectEmployeeTest() {
		
		employeeService.reject("Anson", "Hair Dying", "Tuesday", "13:00");
		Mockito.verify(employeeRepository,Mockito.times(1)).reject("Anson", "Hair Dying", "Tuesday", "13:00");;
	}

	@Test
	public void getServiceTest()
	{
		
		String service="Nail Polish";
		Mockito.when(employeeRepository.getService()).thenReturn(Stream
				.of(new String("Nail Polish")).collect(Collectors.toList()));
		assertEquals(1,employeeService.getService().size());
		
	}
	
	@Test
	public void allWorkingHoursTest()
	{
		
		String username="sid";
		Mockito.when(employeeRepository.AllWorkingHours(username)).thenReturn(Stream
				.of(new Employee(1,"Katie","Hair Drying","Tuesday","12:00","available")).collect(Collectors.toList()));
		assertEquals(1,employeeService.AllWorkingHours(username).size());
		
	}
	
	@Test
	public void getDayTest()
	{
		
		String service="Hair Drying";
		Mockito.when(employeeRepository.getDay(service)).thenReturn(Stream
				.of(new String("Tuesday")).collect(Collectors.toList()));
		assertEquals(1,employeeService.getDay(service).size());
		
	}
	
	@Test
	public void getServiceProviderTest()
	{
		
		String service="Hair Drying";
		String day = "Tuesday";
		String time = "13:00";
		Mockito.when(employeeRepository.getServiceProvider(service, day, time)).thenReturn(Stream
				.of(new String("Hair Drying"), new String("Tuesday"), new String("13:00")).collect(Collectors.toList()));
		assertEquals(1,employeeService.getDay(service).size());
		
	}
	
	@Test
	public void getEmployeeTest()
	{
		
		String name="sid";
		Mockito.when(employeeRepository.findAll()).thenReturn(Stream
				.of(new Employee(1,"Katie","Hair Drying","Tuesday","12:00","available")).collect(Collectors.toList()));
		assertEquals(1,employeeService.getEmployeeName().size());
		
	}
	
	@Test
	public void checkEmployeeTest()
	{
		
		String name="sid";
		String day="Tuesday";
		String time="13:00";
		Mockito.when(employeeRepository.checkEmployee(name, day, time)).thenReturn(Stream
				.of(new String("sid"), new String("Tuesday"), new String("13:00")).collect(Collectors.toList()));
		assertEquals(1,employeeService.getEmployeeName().size());
		
	}
	
	@Test
	public void getCustomerDetailsTest() {
		
		userService.getCustomerDetails();
		Mockito.verify(userRepository,Mockito.times(1)).getCustomerDetails();
	}
	
	@Test
	public void getEmployeeDetailsTest() {
		
		userService.getEmployeeDetails();
		Mockito.verify(userRepository,Mockito.times(1)).getEmployeeDetails();
	}
}
