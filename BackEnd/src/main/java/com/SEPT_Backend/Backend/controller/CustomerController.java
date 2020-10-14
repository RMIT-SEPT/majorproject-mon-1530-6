package com.SEPT_Backend.Backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.Backend.Service.UserService;
import com.SEPT_Backend.Backend.model.User;

/*
 * This controller is used to fetch the customer list from the database alone. 
 * No changes are made though this controller into the database.
 */
@CrossOrigin(origins = "http://192.168.99.1:3001")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

  @Autowired
  public UserService userService;

  //get all customers from database
  @GetMapping("/allcustomers")
  public List < User > getCustomerDetails() {
    return userService.getCustomerDetails();
  }

}