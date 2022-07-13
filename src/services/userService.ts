import axios from "axios";
import { User } from "types/user-type";
import api from "../services/Api";
import swal from 'sweetalert'
axios.defaults.baseURL = "http://mega-api-prod.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
export const userService = {
  postUser: async (newUser: User) => {
    try {
      const req = await axios.post("/user", newUser);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  findUserById: async (id: string) => {
    try {
      api
        .get(`/user/${id}`)
        .then((response: any) => response)
        .then((response: any) => response);
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },
};
