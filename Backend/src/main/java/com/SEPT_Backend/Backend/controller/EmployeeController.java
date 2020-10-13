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
import com.SEPT_Backend.Backend.Service.UserService;
import com.SEPT_Backend.Backend.model.Booking;
import com.SEPT_Backend.Backend.model.Employee;
import com.SEPT_Backend.Backend.model.User;
import com.SEPT_Backend.Backend.payload.request.EmployeeRequest;
import com.SEPT_Backend.Backend.payload.request.InfoRequest;
import com.SEPT_Backend.Backend.payload.response.MessageResponse;

/*
 * All the activities done by admin/customer through bookings or rostering are handled here.
 * This is responsible for adding a employee details into the database, fetch the details 
 * from the database based on user inputs and update the status of booking for an employee
 */
@CrossOrigin(origins = "http://localhost:3001")@RestController@RequestMapping("/api/v1/employee")
public class EmployeeController {

  @Autowired
  public EmployeeService employeeService;

  @Autowired
  public UserService userService;

  // add the employee roaster into the database
  @PostMapping("/add")
  public ResponseEntity < ?>assignEmployee(@RequestBody EmployeeRequest info) {
    String name = info.getName();
    List < String > service = info.getService();
    List < String > day = info.getDay();
    List < String > time = info.getTime();
    String status = info.getStatus();

    for (int x = 0; x < service.size(); x++) {
      for (int y = 0; y < day.size(); y++) {
        for (int z = 0; z < time.size(); z++) {
          Employee employee = new Employee();
          employee.setName(name);
          employee.setService(service.get(x));
          employee.setDay(day.get(y));
          employee.setTime(time.get(z));
          employee.setStatus(status);
          boolean check = employeeService.checkEmployee(name, day.get(y), time.get(z));
          if (check == true) employeeService.saveBooking(employee);

        }
      }
    }

    return ResponseEntity.ok(new MessageResponse("Roster Successfull!"));
  }

  //get the employee name
  @GetMapping("/employeeName")
  public List < String > getEmployeeName() {
    return employeeService.getEmployeeName();
  }

  //get the service for a booking
  @GetMapping("/service")
  public List < String > getService() {
    return employeeService.getService();
  }

  // get day for a booking to process
  @PostMapping("/day")
  public List < String > getDay(@RequestBody EmployeeRequest info) {
    return employeeService.getDay(info.getService().get(0));
  }

  //get time for a booking to process
  @PostMapping("/time")
  public List < String > getTime(@RequestBody EmployeeRequest info) {
    return employeeService.getTime(info.getService().get(0), info.getDay().get(0));
  }
  
//get the service provider name using the parameters passes
  @PostMapping("/serviceProvider")
  public List < String > getServiceProvider(@RequestBody EmployeeRequest info) {
    return employeeService.getServiceProvider(info.getService().get(0), info.getDay().get(0), info.getTime().get(0));
  }

  //set the status to 'pending' when a booking is made
  @PostMapping("/update")
  public void updateEmployee(@RequestBody EmployeeRequest info) {
    employeeService.updateEmployee(info.getName(), info.getService().get(0), info.getDay().get(0), info.getTime().get(0));
  }

  //get the details of all the employee
  @GetMapping("/allEmployee")
  public List < User > getAllEmployee() {
    return userService.getEmployeeDetails();
  }

  //confirm a booking, i.e., change status to 'confirmed'
  @PostMapping("/confirmedWork")
  public List < Booking > confirmedWork(@RequestBody InfoRequest info) {
    return employeeService.confirmedWork(info.getUsername());
  }

  //get all the working hour list for an employee
  @PostMapping("/allwork")
  public List < Employee > AllWorkingHours(@RequestBody InfoRequest info) {
    return employeeService.AllWorkingHours(info.getUsername());
  }


}