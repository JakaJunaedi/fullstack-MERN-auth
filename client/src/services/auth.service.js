import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          // set cookie token user
          localStorage.setItem("user", JSON.stringify(response.data));
          sessionStorage.setItem("user", JSON.stringify(response.data));
          //localStorage.clear();
        }
        console.log(sessionStorage);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    sessionStorage.clear();
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
