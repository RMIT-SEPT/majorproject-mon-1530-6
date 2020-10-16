import axios from 'axios';

import authHeader from './AuthHeader';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";


class EmployeeService {

    //add a booking of a customer
    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/add", employee, { headers: authHeader() });
    }

    //get the service provider name with the details passed 
    getServiceProvider(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/serviceProvider", employee, { headers: authHeader() });
    }

    //get the employeeName from the database
    getEmployeeName() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employeeName", { headers: authHeader() });
    }

    //List of all employees from the database
    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/allEmployee", { headers: authHeader() });
    }

    //get the services that are available for booking
    getServiceName() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/service", { headers: authHeader() });
    }

    //get the working days of the employee from the database using the name
    getServiceDays(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/day", employee, { headers: authHeader() });
    }

    //the times available of the employee using the name and day 
    getServiceTime(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/time", employee, { headers: authHeader() });
    }

    //to all the list of work that is confirmed by the admin for an employee
    getWork(username) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/confirmedWork", username, { headers: authHeader() });
    }

    //get all working hours rostered by admin for an employee
    getAllWork(username) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/allwork", username, { headers: authHeader() });
    }

}

export default new EmployeeService()