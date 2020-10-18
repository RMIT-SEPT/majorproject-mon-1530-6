package com.SEPT_Backend.Backend.Service;

import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.repository.BookingRepository;

/*
 * Booking operations are called from here into 
 * the repository 
 */
@Service
public class BookingService {
	
	@Autowired
	private BookingRepository  bookingRepo ;

	public Booking saveBooking(Booking booking) {
		return bookingRepo.save(booking);
	}
	
	//get all bookings
	public List<Booking> getBookings(){
		return bookingRepo.findAll();
	}

	//find if booking already exists
	public List<Booking> findByDayAndTime(String day, String time, String name) {
		return bookingRepo.findByDayAndTime(day, time, name);
	}

	//get list of booking using username
	public List<Booking> findBooking(String username) {
		return bookingRepo.findBooking(username);
	}
	
	//find a booking by id
	public Booking findByID(long id) {
		return bookingRepo.findByID(id);
	}
	
	//delete a booking
	public void deleteBooking(long id){
		bookingRepo.deleteBooking(id);
	}

	//change the status to 'approved'
	public void approveBooking(long id) {
		bookingRepo.approveBooking(id);
	}
	
	//change the status to 'unapproved'
	public void rejectBooking(long id) {	
		bookingRepo.rejectBooking(id);	
	}
	
	//delete the booking from the database
	public void deleteBooking(Booking booking){
		bookingRepo.delete(booking);
	}
	
}
