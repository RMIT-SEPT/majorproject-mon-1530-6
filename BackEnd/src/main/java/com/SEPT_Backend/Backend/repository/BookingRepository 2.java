package com.SEPT_Backend.Backend.repository;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.SEPT_Backend.Backend.model.Booking;

//Access details from Booking table
@Repository
public interface BookingRepository extends JpaRepository < Booking, Long > {

  @Query(value = "SELECT * FROM Bookings WHERE Username = :username", nativeQuery = true)
  List < Booking > findBooking(@Param("username") String name);

  @Query(value = "SELECT * FROM Bookings WHERE id = :id", nativeQuery = true)
  Booking findByID(@Param("id") long id);

  @Query(value = "SELECT * FROM Bookings WHERE Day = :bookedDay AND Time = :bookedTime AND Name = :bookedName AND status='confirmed'", nativeQuery = true)
  List < Booking > findByDayAndTime(@Param("bookedDay") String day, @Param("bookedTime") String time, @Param("bookedName") String name);

  @Query(value = "SELECT * FROM Bookings WHERE  Name = :name AND status='confirmed'", nativeQuery = true)
  List < Booking > confirmedWork(@Param("name") String name);

  @Transactional
  @Modifying
  @Query(value = "UPDATE Bookings SET status = 'confirmed' WHERE id= :id", nativeQuery = true)
  void approveBooking(@Param("id") long id);

  @Transactional
  @Modifying
  @Query(value = "UPDATE Bookings SET status = 'unapproved' WHERE id= :id", nativeQuery = true)
  void rejectBooking(@Param("id") long id);

  @Transactional
  @Modifying
  @Query(value = "DELETE FROM Bookings WHERE ID = :id AND status = 'unapproved'", nativeQuery = true)
  void deleteBooking(@Param("id") long id);

}