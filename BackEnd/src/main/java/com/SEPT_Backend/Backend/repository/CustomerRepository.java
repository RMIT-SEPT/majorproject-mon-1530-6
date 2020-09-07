package com.SEPT_Backend.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.Backend.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
