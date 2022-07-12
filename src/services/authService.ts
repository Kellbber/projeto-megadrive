import { StringLiteralLike } from "typescript";
import api from './Api'
interface userLoginObjt {
  email: string;
  password: string;
}
const loginService = {
  login: (values: userLoginObjt) => 
    api
      .post("/auth", values)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("ERRO NA CHAMADA", error))
  
};

export {loginService};