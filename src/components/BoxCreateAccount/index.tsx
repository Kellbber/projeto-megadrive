import ButtonLarge from "components/ButtonLarge";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "services/userService";
import { User } from "types/user-type";
import * as S from "./style";

const BoxLogin = () => {
  let Navigate = useNavigate();
  function goToStart() {
    Navigate("/");
  }

  const [user, setUser] = useState<User>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUser: User = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      cpf: event.currentTarget.cpf.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };
   const req = await userService.postUser(newUser);
    if (req?.status === 201) {
      Navigate("/");
  };
    
  }

  return (
    <S.BoxLogin onSubmit={handleSubmit}>
      <S.BoxLoginBack>
        <img onClick={goToStart} />
      </S.BoxLoginBack>
      <S.BoxLoginText>Create User</S.BoxLoginText>
      <S.BoxLoginForm1 posit={true}>
        <input type="text" placeholder="Name" name="Name" id="Name" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={false}>
        <input type="email" placeholder="E-mail" name="email" id="email" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={true}>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1>
        <input
          type="password"
          placeholder="Confirm"
          name="confirmPassword"
          id="confirmPassword"
        />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={true}>
        <input type="text" placeholder="CPF" name="cpf" id="cpf" />
      </S.BoxLoginForm1>
      <ButtonLarge />
    </S.BoxLogin>
  );
};

export default BoxLogin;
