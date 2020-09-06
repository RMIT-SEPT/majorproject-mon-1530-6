package com.rmit.sept6.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rmit.sept6.model.Booking;
import com.rmit.sept6.repository.BookingRepository;
@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingRepository;
	
	public Booking saveOrUpdateBooking(Booking booking) {
		return bookingRepository.save(booking);
	}
}
