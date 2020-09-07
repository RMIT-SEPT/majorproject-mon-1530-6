package com.SEPT_Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.repository.BookingRepository;

public class BookingService implements IBookingService {

	@Autowired
    private BookingRepository repository;
	
	@Override
	public List<Booking> findByDayAndTime(String day, String time) {
		var bookings = (List<Booking>) repository.findByDayAndTime(day, time);
		return bookings;
	}

}
