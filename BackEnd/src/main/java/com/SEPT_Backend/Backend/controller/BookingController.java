package com.SEPT_Backend.Backend.controller;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.Backend.Service.BookingService;
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.payload.request.InfoRequest;
import com.SEPT_Backend.Backend.payload.response.MessageResponse;


@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/booking")
public class BookingController {
	
	@Autowired
	public BookingService bookingService;
	
	// get customers by name
	@GetMapping("/info")
	public List<Booking> getAllBooking(@RequestBody InfoRequest info){
		return bookingService.findBooking(info.getUsername());	 
	}
	
	 //create customer rest api
	@PostMapping("/add")
	public ResponseEntity<?> addBooking(@RequestBody Booking booking)
	{
		List<Booking> temp = (List<Booking>) bookingService.findByDayAndTime(booking.getDay(), booking.getTime(), booking.getName());
		if (temp == null || temp.isEmpty()) {
			//save the booking into database if no duplicate found
			bookingService.saveBooking(booking);
			 return ResponseEntity.ok(new MessageResponse("Booking Successfull!"));
		}
		
		return  ResponseEntity
				.badRequest()
				.body(new MessageResponse("Error: BOOKING is already taken!"));
		
	}
	
}
