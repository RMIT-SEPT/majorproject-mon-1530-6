package com.SEPT_Backend.Backend.Service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository  bookingRepo ;

	public Booking saveBooking(Booking booking) {
		return bookingRepo.save(booking);
		
	}
	
	public List<Booking> getBookings(){
		return bookingRepo.findAll();
	}

	public List<Booking> findByDayAndTime(String day, String time, String name) {
		
		return bookingRepo.findByDayAndTime(day, time, name);
	}

	
	public List<Booking> findBooking(String username) {
		
		return bookingRepo.findBooking(username);
	}
	
	public void deleteBooking(Booking booking)
	{
		bookingRepo.delete(booking);
	}

}
