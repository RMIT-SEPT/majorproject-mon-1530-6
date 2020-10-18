package com.SEPT_Backend.Backend;

import org.springframework.beans.factory.InitializingBean;  

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.SEPT_Backend.Backend.repository.RoleRepository;

@SpringBootApplication

public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	

}
