package com.SEPT_Backend.Backend;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.ERole;
import com.SEPT_Backend.Backend.model.Role;
import com.SEPT_Backend.Backend.model.User;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@SpringBootTest
@WebAppConfiguration
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CustomerControllerTest {

	private MockMvc mvc;
	
	@Autowired
	private WebApplicationContext webApplicationContext;


	
	@BeforeAll
	protected void setUp() {
	      mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	   }
	   protected String mapToJson(Object obj) throws JsonProcessingException {
	      ObjectMapper objectMapper = new ObjectMapper();
	      return objectMapper.writeValueAsString(obj);
	   }
	   protected <T> T mapFromJson(String json, Class<T> clazz)
	      throws JsonParseException, JsonMappingException, IOException {
	      
	      ObjectMapper objectMapper = new ObjectMapper();
	      return objectMapper.readValue(json, clazz);
	   }
	   @Test
	   public void getCustomerList() throws Exception {
	      String uri = "/customer";
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
	         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	       User[] user = this.mapFromJson(content, User[].class);
	      assertTrue(user.length > 0);
	   }
	   
	   @Test
	   public void createUser() throws Exception {
	      String uri = "/customer";
	      User user = new User();
	      user.setAddress("1/42");
	      user.setEmail("gmail");
	      user.setFirstname("AK");
	      user.setId(1L);
	      user.setLastname("KS");
	      user.setPassword("12345");
	      user.setPhone("0421351556");
	      Role role = new Role(ERole.ROLE_USER);
	      Role role2 = new Role(ERole.ROLE_ADMIN);
	      Role role3 = new Role(ERole.ROLE_EMPLOYEE);
	      Set<Role> roles = new HashSet<>();
	      roles.add(role);
	      roles.add(role2);
	      roles.add(role3);
	      user.setRoles(roles);
	      user.setUsername("s1");
	      String inputJson = this.mapToJson(user);
	      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
	         .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(201, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      assertEquals(content, "User created successfully!");
	   }

}
