package com.SEPT_Backend.BackEnd.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SEPT_Backend.BackEnd.model.User;
import com.SEPT_Backend.BackEnd.repository.UserRepository;

/*
 * User repository is accesssed to make necessary changes from function call
 */
@Service
public class UserService {

  @Autowired
  private UserRepository userRepo;

  //get only employee list form USER table
  public List < User > getEmployeeDetails() {
    return userRepo.getEmployeeDetails();
  }

//get only customer list form USER table
  public List < User > getCustomerDetails() {
    return userRepo.getCustomerDetails();
  }
}