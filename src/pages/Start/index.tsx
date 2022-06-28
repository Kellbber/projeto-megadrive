
import * as S from "./style";
import { DateTime } from "luxon";
const Start = () => {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday:'long'});
  return (
    <S.Start>
      <S.StartContent>

        <S.StartHeaderDetailsSearch>
          <img />
          <input type="text" placeholder="Search game..." />
        </S.StartHeaderDetailsSearch>
        <S.StartGameTitle>
         <b>ALL GAMES</b>
        </S.StartGameTitle>
        <div>
          <S.StartGameList>
            <p>Lista de games aqui</p>
          </S.StartGameList>
        </div>
      </S.StartContent>
      <header>
        <S.StartHeaderDetails>
          <S.StartHeaderDetailsImg/>

          <S.StartHeaderRegister>Register</S.StartHeaderRegister>
          <S.StartHeaderSignIn>Sign In</S.StartHeaderSignIn>
        </S.StartHeaderDetails>
        <S.StartHeaderDetailsDate>{dateDescription}</S.StartHeaderDetailsDate>
      </header>
      
    </S.Start>
  );
};

export default Start;
