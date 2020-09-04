package com.rmit.sept6.repository;

import com.rmit.sept6.model.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long>{

	@Override	
	Iterable<Booking> findAllById(Iterable<Long> ids) ;
	}
