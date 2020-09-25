import axios from 'axios';

import authHeader from './AuthHeader';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/employee";


class EmployeeService {


    //add a booking of a customer
    addBooking(employee) {
        return axios.post(BOOKING_API_BASE_URL + "/add", employee, { headers: authHeader() });
    }



}