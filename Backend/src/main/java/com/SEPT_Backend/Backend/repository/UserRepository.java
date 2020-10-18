package com.SEPT_Backend.BackEnd.repository;

import java.util.List;
import java.util.Optional; 


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.BackEnd.model.User;

/*
 * Store all user details, i.e., Admin, Customer and Employee
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	@Query(value = "SELECT USERS.* "
			+ "FROM USER_ROLES,USERS "
			+ "where USERS.ID=USER_ROLES.USER_ID "
			+ "AND USER_ROLES.ROLE_ID=1", nativeQuery= true)
	List<User> getCustomerDetails();
	
	
	@Query(value = "SELECT USERS.* "
			+ "FROM USER_ROLES,USERS "
			+ "where USERS.ID=USER_ROLES.USER_ID "
			+ "AND USER_ROLES.ROLE_ID=2", nativeQuery= true)
	List<User> getEmployeeDetails();
	
	
}
