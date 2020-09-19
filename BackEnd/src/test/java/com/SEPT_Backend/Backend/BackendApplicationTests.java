package com.SEPT_Backend.Backend;


import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

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
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.repository.BookingRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class BackendApplicationTests {
	
	@Autowired
	private BookingService bookingService;
	
	@MockBean
	private BookingRepository bookingRepository;
	
	
	
	@Test
	public void getBookingTest() {
		Mockito.when(bookingRepository.findAll()).thenReturn(Stream
				.of(new Booking("Hair Dying","Jack","Tuesday","13:00","sid"),new Booking("Nail Polish","Katie","Friday","16:00","rose")).collect(Collectors.toList()));
		assertEquals(2,bookingService.getBookings().size());
		
	}
	
	@Test
	public void getUSerByUsernameTest()
	{
		String username="sid";
		Mockito.when(bookingRepository.findBooking(username)).thenReturn(Stream
				.of(new Booking("Nail Polish","Katie","Friday","16:00","rose")).collect(Collectors.toList()));
		assertEquals(1,bookingService.findBooking(username).size());
		
	}
	
	@Test
	public void checkBookedTest() {
		Mockito.when(bookingRepository.findByDayAndTime("Tuesday", "13:00", "James")).thenReturn(Stream
				.of(new Booking("Nail Polish","James","Tuesday","13:00","rose")).collect(Collectors.toList()));
		assertEquals(1,bookingService.findByDayAndTime("Tuesday","13:00","James").size());
		
	}
	
	
	@Test
	public void deleteBooking() {
		Booking booking =new Booking("Hair Dying","Jack","Tuesday","13:00","sid");
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
	
	
	
	
	
	


}
