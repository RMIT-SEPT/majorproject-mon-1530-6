package com.SEPT_Backend.Backend.repository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.Backend.model.User;

@Repository
public interface CustomerRepository extends JpaRepository<User, Long>{

	
	
	
}
