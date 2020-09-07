package com.SEPT_Backend.Service;

import java.util.List;
import com.SEPT_Backend.Backend.model.Booking;

public interface IBookingService {
	
	List<Booking> findByDayAndTime(String day, String time);
}
