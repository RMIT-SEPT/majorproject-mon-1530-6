package com.rmit.sept6.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.*;
import java.util.Date;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    @NotBlank(message = "Customer name is required")
    private String name;
    @NotBlank(message = "Password is required")
    private String password;
    @NotBlank(message = "Address is required")
    private String address;
    @NotBlank(message = "Phone Number is required")
    private int phoneNum;

    // Constructor
    public Customer() {
    }

    // Getter Methods
    public String getUsername() {
        return username;
    }
    
    public String getName() {
    	return name;
    }
    
    public String getPassword() {
    	return password;
    }
    
    // Setter Methods
    public void setUsername( String un ) {
    	this.username = username;
    }
    
    public void setName( String name ) {
    	this.name = name;
    }
    
    public void setPassword( String password ) {
    	this.password = password;
    }
    
    // Date Methods
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhone() {
        return phoneNum;
    }

    public void setPhone(int phoneNum) {
        this.phoneNum = phoneNum;
    }

   


}