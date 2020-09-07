package com.SEPT_Backend.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.Backend.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{

	@Query(value = "SELECT * FROM Booking WHERE Day = :bookedDay AND Time = :bookedTime", nativeQuery = true)
	List<Booking> findByDayAndTime(@Param("bookedDay") String day, @Param("bookedTime") String time);

}
