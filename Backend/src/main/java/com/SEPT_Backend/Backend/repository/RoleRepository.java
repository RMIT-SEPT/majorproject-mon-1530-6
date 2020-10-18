package com.SEPT_Backend.BackEnd.repository;

import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SEPT_Backend.BackEnd.model.ERole;
import com.SEPT_Backend.BackEnd.model.Role;

/*
 * The table is prefilled with pre-defined roles to make it 
 * consistent for new user registration 
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
