import axios from "axios";
import { User } from "types/user-type";
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
};
