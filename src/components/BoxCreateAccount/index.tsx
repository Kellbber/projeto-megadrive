import ButtonLarge from "components/ButtonLarge";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const BoxLogin = () => {
  let Navigate = useNavigate();
  function goToStart() {
    Navigate("/");
  }
  return (
    <S.BoxLogin>
      <S.BoxLoginBack>
        <img onClick={goToStart} />
      </S.BoxLoginBack>
      <S.BoxLoginText>Create User</S.BoxLoginText>
      <S.BoxLoginForm1 posit={true}>
        <input type="text" placeholder="Name" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={false}>
        <input type="email" placeholder="E-mail" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={true}>
        <input type="password" placeholder="Password" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1>
        <input type="password" placeholder="Confirm" />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={true}>
        <input type="text" placeholder="CPF" />
      </S.BoxLoginForm1>
      <ButtonLarge type="button" />
    </S.BoxLogin>
  );
};

export default BoxLogin;
