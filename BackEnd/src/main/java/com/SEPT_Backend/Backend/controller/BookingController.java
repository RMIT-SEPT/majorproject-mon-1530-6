package com.SEPT_Backend.Backend.controller;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.payload.response.MessageResponse;
import com.SEPT_Backend.Backend.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
public class BookingController {
	
	@Autowired
	public BookingRepository bookingRepository;
	
	
	
	// get all customers
	@GetMapping("/booking")
	public List<Booking> getAllBooking(Long id){
		
		//return bookingRepository.findById(id);
		//return bookingRepository.findAll();
		//return bookingRepository.findBooking(id);
		
		return bookingRepository.findBooking(id);
		
		
		
	}
	
	
	 //create customer rest api
	@PostMapping("/booking")
	public ResponseEntity<?> addBooking(@RequestBody Booking booking)
	{
		
		 
		var temp = (List<Booking>) bookingRepository.findByDayAndTime(booking.getDay(), booking.getTime(), booking.getName());
		if (temp == null || temp.isEmpty()) {
			
			 bookingRepository.save(booking);
			 return ResponseEntity.ok(new MessageResponse("Booking Successfull!"));
		}
		return  ResponseEntity
				.badRequest()
				.body(new MessageResponse("Error: BOOKING is already taken!"));
		
	}
	
	@GetMapping("/booking/find")
	public List<Booking> getbyID(long id){
		return bookingRepository.findBooking(id);
	}
	
	
	
	
	
}
