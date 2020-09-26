import axios from 'axios';

import authHeader from './AuthHeader';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";


class EmployeeService {


    //add a booking of a customer
    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/add", employee, { headers: authHeader() });
    }



}

export default new EmployeeService()