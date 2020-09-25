package com.SEPT_Backend.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SEPT_Backend.Backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	

}
