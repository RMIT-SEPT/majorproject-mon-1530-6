package com.SEPT_Backend.Backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.Backend.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3001")@RestController@RequestMapping("/api/test")
//To check if the user board can be accessed correctly from frontend
public class TestController {@Autowired
  public BookingRepository bookingRepository;

  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }

  @GetMapping("/user")@PreAuthorize("hasRole('USER') or hasRole('EMPLOYEE') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/emp")@PreAuthorize("hasRole('EMPLOYEE')")
  public String employeeAccess() {
    return "Employee Board.";
  }

  @GetMapping("/admin")@PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }

}