package com.SEPT_Backend.BackEnd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.BackEnd.Service.BookingService;
import com.SEPT_Backend.BackEnd.Service.EmployeeService;
import com.SEPT_Backend.BackEnd.model.Booking;
import com.SEPT_Backend.BackEnd.payload.request.InfoRequest;
import com.SEPT_Backend.BackEnd.payload.response.MessageResponse;


/*
 * The Booking controler takes in the input paramaters and makes the required changes in the database.
 * This is responsible of any bookings made by the users. Bookings that are already booked are taken care of 
 * and redundancy of bookings are minimised
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/booking")
public class BookingController {

    @Autowired
    public BookingService bookingService;

    @Autowired
    public EmployeeService employeeService;

    // get customers by name
    @PostMapping("/info")
    public List < Booking > fingBooking(@RequestBody InfoRequest info) {
        return bookingService.findBooking(info.getUsername());
    }

    //create customer rest api
    @PostMapping("/add")
    public ResponseEntity < ? > addBooking(@RequestBody Booking booking) {
        List < Booking > temp = (List < Booking > ) bookingService.findByDayAndTime(booking.getDay(), booking.getTime(), booking.getName());
        if (temp == null || temp.isEmpty()) {
            //save the booking into database if no duplicate found
            bookingService.saveBooking(booking);
            //change status into pending when a new booking is made
            employeeService.updateEmployee(booking.getName(), booking.getService(), booking.getDay(), booking.getTime());
            return ResponseEntity.ok(new MessageResponse("Booking Successfull!"));
        }
        return ResponseEntity
            .badRequest()
            .body(new MessageResponse("Error: BOOKING is already taken!"));
    }

    //get all bookings 
    @GetMapping("/all")
    public List < Booking > getAllBooking() {
        return bookingService.getBookings();
    }
    
    //approve a booking by the id 
    @PostMapping("/approve")
    public void approveBooking(@RequestBody Booking booking) {
        bookingService.approveBooking(booking.getId());
        Booking booking_object = bookingService.findByID(booking.getId());
        employeeService.approve(booking_object.getName(), booking_object.getService(), booking_object.getDay(), booking_object.getTime());
    }


    //reject a booking by id
    @PostMapping("/reject")
    public void rejectBooking(@RequestBody Booking booking) {
        bookingService.rejectBooking(booking.getId());
        Booking booking_object = bookingService.findByID(booking.getId());
        employeeService.reject(booking_object.getName(), booking_object.getService(), booking_object.getDay(), booking_object.getTime());
    }

    //delete a booking by id
    @PostMapping("/delete")
    public void deleteBooking(@RequestBody Booking booking) {
        bookingService.deleteBooking(booking.getId());
    }

}