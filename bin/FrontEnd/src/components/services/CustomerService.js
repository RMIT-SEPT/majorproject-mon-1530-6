import axios from 'axios';
const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";


class CustomerService {

    getCustomer() {
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer) {
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

}

export default new CustomerService()