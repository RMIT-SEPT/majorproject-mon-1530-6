import axios from 'axios';

import authHeader from './AuthHeader';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";


class CustomerService {

    //get a  customers from the DB
    getCustomer() {
        return axios.get(CUSTOMER_API_BASE_URL + "/allcustomers", { headers: authHeader() });
    }
}

export default new CustomerService()