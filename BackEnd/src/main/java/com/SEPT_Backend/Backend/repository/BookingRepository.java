package com.SEPT_Backend.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.Backend.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{

	

}
