package com.SEPT_Backend.BackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.SEPT_Backend.BackEnd.model.User;

//Access details from User table
@Repository
public interface CustomerRepository extends JpaRepository<User, Long>{

}
