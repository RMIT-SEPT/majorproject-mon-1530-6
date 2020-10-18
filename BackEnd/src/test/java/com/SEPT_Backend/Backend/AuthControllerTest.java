package com.SEPT_Backend.Backend;

import static org.junit.jupiter.api.Assertions.assertEquals; 
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.net.URL;
import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.SEPT_Backend.Backend.controller.AuthController;
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.ERole;
import com.SEPT_Backend.Backend.model.Role;
import com.SEPT_Backend.Backend.model.User;
import com.SEPT_Backend.Backend.payload.request.LoginRequest;
import com.SEPT_Backend.Backend.payload.request.SignupRequest;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@SpringBootTest
@WebAppConfiguration
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class AuthControllerTest {

	private MockMvc mvc;
	
	@Autowired
	private LoginRequest lr;
	private SignupRequest sr;
	
	@LocalServerPort
	private int port;

	private URL base;

	@Autowired
	private TestRestTemplate template;
	private AuthController ac;

	@BeforeAll
	protected void setUp() {
	      lr = new LoginRequest();
	      sr = new SignupRequest();
	      ac = new AuthController();
	      lr.setPassword("123456");
	      lr.setUsername("A");
	      
	   }
	
	@Test
	private void authenticateUser() throws Exception{
		lr.setUsername("s1");
		lr.setPassword("12345");
		ResponseEntity<?> response = ac.authenticateUser(lr);
		assertEquals(response, "Login successfully");
	}
	
	@Test
	private void registerUser() throws Exception{
		
		sr.setAddress("1/42");
		sr.setEmail("gmail");
		sr.setFirstname("AK");
		sr.setLastname("KS");
		sr.setPassword("12345");
		sr.setPhone("0421351556");
	      String role = ERole.ROLE_ADMIN.toString();
	      String role2 = ERole.ROLE_EMPLOYEE.toString();	      
	      String role3 = ERole.ROLE_USER.toString();
	      Set<String> roles = new HashSet<>();
	      roles.add(role);
	      roles.add(role2);
	      roles.add(role3);
	      sr.setRole(roles);
	      sr.setUsername("s1");
	      ResponseEntity<?> response = ac.registerUser(sr);
	      assertEquals(response, "User registered successfully!");
 	}
	@Test
	private void registerUserNoPassword() throws Exception{
		
		sr.setAddress("1/42");
		sr.setEmail("gmail");
		sr.setFirstname("AK");
		sr.setLastname("KS");
		sr.setPassword("");
		sr.setPhone("0421351556");
	      String role = ERole.ROLE_ADMIN.toString();
	      String role2 = ERole.ROLE_EMPLOYEE.toString();	      
	      String role3 = ERole.ROLE_USER.toString();
	      Set<String> roles = new HashSet<>();
	      roles.add(role);
	      roles.add(role2);
	      roles.add(role3);
	      sr.setRole(roles);
	      sr.setUsername("s1");
	      ResponseEntity<?> response = ac.registerUser(sr);
	      assertEquals(response, "User registered successfully!");
 	}
	@Test
	private void registerUserNoDetails() throws Exception{
		
		sr.setAddress("");
		sr.setEmail("");
		sr.setFirstname("");
		sr.setLastname("");
		sr.setPassword("");
		sr.setPhone("");
	      String role = ERole.ROLE_ADMIN.toString();
	      String role2 = ERole.ROLE_EMPLOYEE.toString();	      
	      String role3 = ERole.ROLE_USER.toString();
	      Set<String> roles = new HashSet<>();
	      roles.add(role);
	      roles.add(role2);
	      roles.add(role3);
	      sr.setRole(roles);
	      sr.setUsername("s1");
	      ResponseEntity<?> response = ac.registerUser(sr);
	      assertEquals(response, "User registered successfully!");
 	}
	@Test
	private void adminAddsEmployee() throws Exception{
		
		sr.setAddress("Employee Address");
		sr.setEmail("Employee Email");
		sr.setFirstname("");
		sr.setLastname("");
		sr.setPassword("");
		sr.setPhone("");
	    String role2 = ERole.ROLE_EMPLOYEE.toString();	      
	    Set<String> roles = new HashSet<>();
	    roles.add(role2);
	    sr.setRole(roles);
	    sr.setUsername("s1");
	    ResponseEntity<?> response = ac.registerUser(sr);
	    assertEquals(response, "User registered successfully!");
 	}
}