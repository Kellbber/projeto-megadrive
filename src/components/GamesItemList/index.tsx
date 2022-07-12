
import * as S from './style'

interface GameItemListProps{
    children: React.ReactNode;
}
const GamesItemList = ({children}:GameItemListProps) => {

  return (
    <section>
        <S.GamesItemListHeader>
            <S.GamesItemListHeaderTitle>
                    Todos os games aqui
            </S.GamesItemListHeaderTitle>
            <S.GamesItemListHeaderSelect>

            </S.GamesItemListHeaderSelect>
        </S.GamesItemListHeader>
        <S.GamesItemList>
            {children}
        </S.GamesItemList>
    </section>
  )
}

export default GamesItemList