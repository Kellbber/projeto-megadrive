import * as S from "./style";
import ButtonLarge from 'components/ButtonLarge'
const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginBack />
      <S.BoxLoginText>User Login</S.BoxLoginText>
      <S.BoxLoginForm1>
       
          <input type="text" placeholder="E-mail" />
          <img/>
          </S.BoxLoginForm1> 
          <S.BoxLoginForm2>
       
       <input type="password" placeholder="Password" />
       <img/>
       </S.BoxLoginForm2>   
       <S.BoxLoginQuestion>
        Don`t Have ACCOUNT?
        <a>
        CLICK <text>HERE</text>
        </a>
        </S.BoxLoginQuestion>  
        <ButtonLarge type="button"/>
    </S.BoxLogin>
  );
};

export default BoxLogin;
