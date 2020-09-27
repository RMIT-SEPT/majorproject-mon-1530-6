package com.SEPT_Backend.Backend.controller;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
		//System.out.println("HHOHOHOHOHHO      "+info.getService().get(0));

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
	
	
	@GetMapping("/service")
	public List<String> getService(){
		return employeeService.getService();
	}
	
	@PostMapping("/day")
	public List<String> getDay(@RequestBody EmployeeRequest info)
	{
		System.out.println("HHOHOHOHOHHO      "+info.getService().get(0));
		return employeeService.getDay(info.getService().get(0));
	}
	
	@PostMapping("/time")
	public List<String> getTime(@RequestBody EmployeeRequest info)
	{
		return employeeService.getTime(info.getService().get(0),info.getDay().get(0));
	}
	
	
	@PostMapping("/serviceProvider")
	public List<String> getServiceProvider(@RequestBody EmployeeRequest info)
	{
		return employeeService.getServiceProvider(info.getService().get(0),info.getDay().get(0),info.getTime().get(0));
	}
	
	

}
