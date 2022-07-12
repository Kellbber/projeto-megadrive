import{ useEffect, useState } from 'react'
import { findAllGames } from 'services/gameService';
import * as S from './style'
const GamesItem = () => {
    const [games, setGames] = useState<any[]>([]);

    useEffect(()=>{
      getAllGames();
    }, [])
      const getAllGames = async () =>{
        const response = await findAllGames.allGames();
    
        console.log(`jogos exibidos`, response)
        setGames(response.data.results)
      }
  return (

    <S.GamesItem >
        <S.GamesItemImage src="" alt=""/>
        <div>
            <S.GamesItemName>
                {}
            </S.GamesItemName>
            <S.GamesItemPrice>
                {}
            </S.GamesItemPrice>
            <S.GamesItemDescription>
                {}
            </S.GamesItemDescription>
        </div>
    </S.GamesItem>
  )
}

export default GamesItem;