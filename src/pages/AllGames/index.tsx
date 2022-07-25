import * as S from "./style";
import { findAllGames } from "services/gamesService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swall from "sweetalert";

import Card from "components/GamesItem";
import { userLoggedService } from "services/authService";
import { findProfileById } from "services/profileService";

interface Games {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  gameplayYoutubeUrl: string,
  trailerYoutubeUrl: string;
  genres:[{
    name: string;
    createdAt?:string;
    updatedAt?:string;
  }]

  
}
interface User {
  name: string;
  email: string;
  id: string;
  isAdmin: boolean;
}
interface Profiles {
  id: string;
  title: string;
  imageUrl: string;
  gameId?: string;
  games?: [];
  favoriteGames?: {
    games?: Games[];
  };
  favoriteGameId?: string;
  userId: string;
}

const AllGames = () => {
  const [profile, setProfile] = useState<Profiles>();
  const { id } = useParams();
  const [games, setGames] = useState<Games[]>([]);
  const [userLogged, setUserLogged] = useState<User>({
    email: "",
    name: "",
    id: "",
    isAdmin: false,
  });
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");

  const getAllGames = async () => {
    if (!jwt) {
      swall({
        title: "ERRO",
        text: "Faça o Login antes de entrar na página de games",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllGames.allGames();

      if (response.status === 204) {
        swall({
          title: "Info",
          text: "Não existe jogo cadastrado!",
          icon: "info",
          timer: 7000,
        });
      } else {
        setGames(response.data);
      }
    }
  };
  const getProfileById = async () => {
    const response = await findProfileById.profileById(id ?? "");
    setProfile(response.data);
  };

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response.data);
  };
  useEffect(() => {
    if (id) {
      getProfileById();
    }
    getAllGames();
    getUserLogged();
  }, []);
  return (
    <S.allGames>
      <S.allGamesContent>
        <h1>All Games</h1>
        {games?.map((game: Games, index) => (
          <Card game={game} key={index} user={userLogged} />
          
        ))}
      </S.allGamesContent>
    </S.allGames>
  );
};

export default AllGames;
