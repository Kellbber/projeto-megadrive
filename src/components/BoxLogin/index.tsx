import ButtonLarge from "components/ButtonLarge";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "services/authService";
import * as S from "./style";
import swal from 'sweetalert'
const BoxLogin = (props: any) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  interface userLoginObj {
    email: string;
    password: string;
  }
  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const loginUser = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
    const jwt = response.data.token;
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      swal({
        title: 'Seja Bem-vindo',
        icon: 'success',
        timer: 3000,
      })
      Navigate("/profile");
    }
  };
  let Navigate = useNavigate();
  function goToStart() {
    Navigate("/");
  }
  function goToRegister() {
    Navigate("/createaccount");
  }
  return (
    <S.BoxLogin>
      <S.BoxLoginText>User Login</S.BoxLoginText>
      <S.BoxLoginForm1 posit={2} onSubmit={loginUser}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
          onChange={handleChangeValues}
        />
        <img />

        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={handleChangeValues}
        />
        <img />
        <ButtonLarge />
      </S.BoxLoginForm1>
      <S.BoxLoginQuestion>
        Don`t Have ACCOUNT?
        <a onClick={goToRegister}>CLICK HERE</a>
      </S.BoxLoginQuestion>
    </S.BoxLogin>
  );
};

export default BoxLogin;
