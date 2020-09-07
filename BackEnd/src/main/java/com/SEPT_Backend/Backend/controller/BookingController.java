package com.SEPT_Backend.Backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Customer;
import com.SEPT_Backend.Backend.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
public class BookingController {
	
	@Autowired
	public BookingRepository bookingRepository;
	
	// get all customers
	@GetMapping("/booking")
	public List<Booking> getAllBooking(){
		return bookingRepository.findAll();
	}
	
	//create customer rest api
	@PostMapping("/booking")
	public Booking addBooking(@RequestBody Booking booking)
	{
		return bookingRepository.save(booking);
	}
	
	

}
