import axios from 'axios';

import authHeader from './AuthHeader';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";


class EmployeeService {


    //add a booking of a customer
    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/add", employee, { headers: authHeader() });
    }

    getServiceProvider(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/serviceProvider", employee, { headers: authHeader() });
    }

    //employeeName
    getEmployeeName() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/employeeName", { headers: authHeader() });
    }

    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/allEmployee", { headers: authHeader() });
    }

    getServiceName() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/service", { headers: authHeader() });
    }

    getServiceDays(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/day", employee, { headers: authHeader() });
    }

    getServiceTime(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/time", employee, { headers: authHeader() });
    }

    getWork(username) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/confirmedWork", username, { headers: authHeader() });
    }



    getAllWork(username) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/allwork", username, { headers: authHeader() });
    }



}

export default new EmployeeService()