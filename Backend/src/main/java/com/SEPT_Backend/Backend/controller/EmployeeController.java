package com.SEPT_Backend.Backend.controller;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.Backend.Service.EmployeeService;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.payload.request.EmployeeRequest;
import com.SEPT_Backend.Backend.payload.response.MessageResponse;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {
	
	@Autowired
	public EmployeeService employeeService;
	
	// get customers by name
	@PostMapping("/add")
	public ResponseEntity<?> assignEmployee(@RequestBody EmployeeRequest info){
		String name = info.getName();
		List<String> service = info.getService();
		List<String> day = info.getDay();
		List<String> time = info.getTime();
		String status = info.getStatus();
		for(int x=0;x<service.size();x++)
		{
			for(int y=0;y<day.size();y++)
			{
				for(int z=0;z<time.size();z++)
				{
					Employee employee = new Employee();
					employee.setName(name);
					employee.setService(service.get(x));
					employee.setDay(day.get(y));
					employee.setTime(time.get(z));
					employee.setStatus(status);
					employeeService.saveBooking(employee);
					//System.out.println(name + " " + service.get(x) + " "+day.get(y)+" "+time.get(z) + " "+status);
				}
			}
		}
		
		return ResponseEntity.ok(new MessageResponse("Roster Successfull!"));
	}

}
