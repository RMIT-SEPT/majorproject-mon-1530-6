import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname, lastname, address, email, phone, password, username) {
    return axios.post(API_URL + "signup", {
      firstname,
      lastname,
      address,
      email,
      phone,
      password,
      username
    });
  }

  addEmployee(firstname, lastname, address, email, phone, password, username) {
    return axios.post(API_URL + "addemp", {
      firstname,
      lastname,
      address,
      email,
      phone,
      password,
      username
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
