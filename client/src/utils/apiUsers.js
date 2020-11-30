import axios from "axios";

export default {

    signUp: function (user) {
      return axios.post("/api/user", user);
    },
    getUser: function (username, password) {
      return axios.post("/api/user/login", { username, password });
    },
    updateUser: function (user) {
      return axios.put("/api/user", user);
    }
  };
  