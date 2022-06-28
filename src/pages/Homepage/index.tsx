import * as S from "./style";
import { DateTime } from "luxon";
const Homepage = () => {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday:'long'});
    return (
      <S.Homepage>
  
        <S.HomepageContent>
  

          <S.HomepageGameTitle>
           <b>purchased games</b>
          </S.HomepageGameTitle>
          <div>
            <S.HomepageGameList>
              <p>Lista de games comprados</p>
            </S.HomepageGameList>
            <S.HomepageGameTitle>
           <b>Favorites games</b>
          </S.HomepageGameTitle>
            <S.HomepageGameList>
              <p>Lista de games favoritos</p>
            </S.HomepageGameList>
          </div>
        </S.HomepageContent>
        <header>
          <S.HomepageHeaderDetails>
            <S.HomepageHeaderDetailsImg/>
            <S.HomepageHeaderDetailsText>
              Logged Name here
            </S.HomepageHeaderDetailsText>
          </S.HomepageHeaderDetails>
          <S.HomepageHeaderDetailsDate>{dateDescription}</S.HomepageHeaderDetailsDate>
        </header>
        
      </S.Homepage>
    );
  };
  
  export default Homepage;
  