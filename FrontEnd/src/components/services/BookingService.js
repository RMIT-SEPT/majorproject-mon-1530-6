import axios from 'axios';

import authHeader from './AuthHeader';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/booking";


class BookingService {

    //add a booking of a customer
    addBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL + "/add", booking, { headers: authHeader() });
    }

    //find a booking of a customer using username
    findBooking(username) {
        return axios.post(BOOKING_API_BASE_URL + "/info", username, { headers: authHeader() });
    }

    //get all the bookings
    getBooking() {
        return axios.get(BOOKING_API_BASE_URL + "/all", { headers: authHeader() });
    }

    //Approve an booking by changing the corresponding ID in the DB
    approveBooking(id) {
        return axios.post(BOOKING_API_BASE_URL + "/approve", id, { headers: authHeader() });
    }

    //Reject the booking in the DB 
    rejectBooking(id) {
        return axios.post(BOOKING_API_BASE_URL + "/reject", id, { headers: authHeader() });
    }

    //Remove a booking from the DB
    deleteBooking(id) {
        return axios.post(BOOKING_API_BASE_URL + "/delete", id, { headers: authHeader() });
    }

}

export default new BookingService()