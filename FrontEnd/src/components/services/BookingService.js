import axios from 'axios';
const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/booking";


class BookingService {

    getBooking() {
        return axios.get(BOOKING_API_BASE_URL);
    }

    addBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL, booking);
    }


}

export default new BookingService()