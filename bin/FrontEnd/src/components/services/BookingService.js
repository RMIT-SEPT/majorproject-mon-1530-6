import axios from 'axios';

import authHeader from './AuthHeader';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/booking";


class BookingService {

    getBooking() {
        return axios.get(BOOKING_API_BASE_URL, { headers: authHeader() });
    }

    addBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL, booking, { headers: authHeader() });
    }

    findBooking(id) {
        return axios.get(BOOKING_API_BASE_URL, { headers: authHeader() });
    }


}

export default new BookingService()