package com.rmit.sept6.repository;

import com.rmit.sept6.model.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{

	@Override	
	Iterable<Employee> findAllById(Iterable<Long> ids) ;
	}

