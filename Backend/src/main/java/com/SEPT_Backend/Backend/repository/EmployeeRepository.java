package com.SEPT_Backend.Backend.repository;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.SEPT_Backend.Backend.model.Employee;

/*
 * Appropriate changes in the database for customer bookings are made
 */
public interface EmployeeRepository extends JpaRepository < Employee,Long > {

  @Query(value = "SELECT DISTINCT Service FROM Employee WHERE Status = 'available'", nativeQuery = true)
  List < String > getService();

  @Query(value = "SELECT DISTINCT Day FROM Employee WHERE Service= :service AND Status = 'available'", nativeQuery = true)
  List < String > getDay(@Param("service") String service);

  @Query(value = "SELECT DISTINCT Time FROM Employee WHERE Service= :service AND Day= :day AND Status = 'available'", nativeQuery = true)
  List < String > getTime(@Param("service") String service, @Param("day") String day);

  @Query(value = "SELECT DISTINCT Emp_name FROM Employee WHERE Service = :service AND Day= :day AND Time= :time AND Status = 'available'", nativeQuery = true)
  List < String > getServiceProvider(@Param("service") String service, @Param("day") String day, @Param("time") String time);

  @Query(value = "SELECT User_name FROM USER_ROLES,USERS where USERS.ID=USER_ROLES.USER_ID AND USER_ROLES.ROLE_ID=2", nativeQuery = true)
  List < String > getEmployeeName();

  @Query(value = "SELECT * FROM Employee WHERE Day= :day AND Time= :time AND Emp_name = :name AND Status = 'available'", nativeQuery = true)
  List < String > checkEmployee(@Param("name") String name, @Param("day") String day, @Param("time") String time);
  
  @Query(value = "SELECT * FROM Employee WHERE  Emp_name = :name", nativeQuery = true)
  List < Employee > AllWorkingHours(@Param("name") String name);

  @Transactional
  @Modifying
  @Query(value = "UPDATE Employee SET status = 'pending' WHERE Service = :service AND Day= :day AND Time= :time AND Emp_name = :name", nativeQuery = true)
  void updateEmployee(@Param("name") String name, @Param("service") String service, @Param("day") String day, @Param("time") String time);

  @Transactional
  @Modifying
  @Query(value = "UPDATE Employee SET status = 'unavailable' WHERE Service = :service AND Day= :day AND Time= :time AND Emp_name = :name", nativeQuery = true)
  void approve(@Param("name") String name, @Param("service") String service, @Param("day") String day, @Param("time") String time);

  @Transactional
  @Modifying
  @Query(value = "UPDATE Employee SET status = 'available' WHERE Service = :service AND Day= :day AND Time= :time AND Emp_name = :name", nativeQuery = true)
  void reject(@Param("name") String name, @Param("service") String service, @Param("day") String day, @Param("time") String time);

  
}