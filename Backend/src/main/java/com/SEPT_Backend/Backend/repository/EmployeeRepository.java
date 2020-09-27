package com.SEPT_Backend.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	@Query(value = "SELECT DISTINCT Service FROM Employee WHERE Status = 'available'", nativeQuery = true)
	List<String> getService();
	
	@Query(value = "SELECT DISTINCT Day FROM Employee WHERE Service= :service AND Status = 'available'", nativeQuery = true)
	List<String> getDay( @Param("service") String service );
	
	@Query(value = "SELECT DISTINCT Time FROM Employee WHERE Service= :service AND Day= :day AND Status = 'available'", nativeQuery = true)
	List<String> getTime(@Param("service") String service, @Param("day") String day);
	
	
	@Query(value = "SELECT DISTINCT Emp_name FROM Employee WHERE Service = :service AND Day= :day AND Time= :time AND Status = 'available'", nativeQuery = true)
	List<String> getServiceProvider(@Param("service") String service, @Param("day") String day, @Param("time") String time);
	
	
	
	
	
	
}
