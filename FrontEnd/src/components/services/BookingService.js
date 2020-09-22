import axios from 'axios';

import authHeader from './AuthHeader';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/booking";


class BookingService {

    //get all booking
    getBooking() {
        return axios.get(BOOKING_API_BASE_URL, { headers: authHeader() });
    }

    //add a booking of a customer
    addBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL + "/add", booking, { headers: authHeader() });
    }

    //find a booking of a customer using username
    findBooking(username) {
        return axios.get(BOOKING_API_BASE_URL + 'info', username, { headers: authHeader() });
    }


}

export default new BookingService()