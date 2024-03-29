import SaveButton from "components/SaveButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
import { deleteGame, updateGame } from "services/gamesService";
import { findGenres } from "services/genreService";
import { favoriteGame, findProfileById, PurchaseGame } from "services/profileService";

import * as S from "./style";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,.8)",
    borderRadius: `1rem`,
  },
};

interface Genres {
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
interface Games {

  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  gameplayYoutubeUrl: string;
  trailerYoutubeUrl: string;
  genreName: string;
}


interface game{
 
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    gameplayYoutubeUrl: string;
    trailerYoutubeUrl: string;
    genres: [
      {
        name: string;
        createdAt?: string;
        updatedAt?: string;
      }
    ];
 
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



const Card = (props:{user: User, game:game, profile: string, purchased:boolean, setControl:Dispatch<SetStateAction<boolean>>}) => {

  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalIsOpen2, setIsOpen2]=useState<boolean>(false);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [profile, setProfile] = useState<Profiles>();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upGame: Games = {
      title: event.currentTarget.Title.value,
      coverImageUrl: event.currentTarget.image.value,
      description: event.currentTarget.description.value,
      year: parseInt(event.currentTarget.year.value),
      imdbScore: parseInt(event.currentTarget.imdbScore.value),
      trailerYoutubeUrl: event.currentTarget.trailer.value,
      gameplayYoutubeUrl: event.currentTarget.gameplay.value,
      genreName: event.currentTarget.genre.value,
    };
    
    
   await updateGame.update(props.game.id, upGame);
   props.setControl(true);
   closeModal();
    

    
    
  }
  const getProfileById = async () => {
    const response = await findProfileById.profileById(props.profile?? "");
    setProfile(response.data);
   
  };
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  const getAllGenres = async () => {
    const response = await findGenres.allGenres();

    setGenres(response.data);
  };
 

  useEffect(() => {
    getAllGenres();
    getProfileById();
  }, []);

  return (
    <S.GamesItem>
      <S.GamesItemImage src={props.game.coverImageUrl} alt="Imagem do jogo" onClick={openModal2} />
      <S.Games>
        <h2>{props.game.title}</h2>
        <p>Score:  {props.game.imdbScore}</p>
      </S.Games>
      <S.admIcons>

        <div>
          <BiPurchaseTag size={20} cursor="pointer" display={props.purchased?"none":"flex"}
          onClick={() => {
            PurchaseGame.purchase(props.profile ?? "", props.game.id);
            props.setControl(true);
          }} />
        </div>
        <div>
          <FiEdit
            size={20}
            display={props.user.isAdmin ? "flex" : "none"}
            onClick={openModal}
            cursor="pointer"
          />
        </div>

        <div>
          <AiFillDelete
            size={20}
            display={props.user.isAdmin ? "flex" : "none"}
            cursor="pointer"
            onClick={async () => {
             await deleteGame.delete(props.game.id);
              props.setControl(true);

            }}
          />
        </div>
      </S.admIcons>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.ModalStyle onSubmit={handleSubmit}>
          <button onClick={closeModal}>
            <img />
          </button>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="Title"
            id="title"
            defaultValue={props.game.title}
          />
          <label htmlFor="genre">Genre:</label>
          <select name="genre">
            {genres?.map((genre: Genres, index) => (
              <option key={index}>{genre.name}</option>
            ))}
          </select>
          <label htmlFor="image">Image:</label>
          <input type="text" defaultValue={props.game.coverImageUrl} name="image" />
          <label htmlFor="description">Description:</label>
          <textarea
            rows={4}
            cols={50}
            defaultValue={props.game.description}
            name="description"
          />
          <label htmlFor="year">Year:</label>
          <input type="number" defaultValue={props.game.year} name="year" />
          <label htmlFor="imdbScore">Score:</label>
          <input type="number" defaultValue={props.game.imdbScore} name="imdbScore" />
          <label htmlFor="trailer">Trailer:</label>
          <input
            type="text"
            defaultValue={props.game.trailerYoutubeUrl}
            name="trailer"
          />
          <label htmlFor="gameplay">Gameplay:</label>
          <input
            type="text"
            defaultValue={props.game.gameplayYoutubeUrl}
            name="gameplay"
          />
          <SaveButton type="submit" />
        </S.ModalStyle>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal}
        style={customStyles}
    
      >      

        <S.DetailsContent>
        <S.BoxProfileBack>
      <img onClick={closeModal2} />
    </S.BoxProfileBack>
          <S.title>
          {props.game.title}
          </S.title>
          <S.img>
            <img src={props.game.coverImageUrl} alt="imagem do jogo" />
            <S.description>
              {props.game.description}
            </S.description>
            <S.resume>
              <h3>Year:</h3>
              <p>{props.game.year}</p>
              <h3>Score:</h3>
              <p>{props.game.imdbScore}</p>
              <h3>Genre:</h3>
              <p>{props.game.genres[0].name}</p>
            </S.resume>
           
          </S.img>
          <S.link>
          <h3>Gameplay:</h3>
          <a href={props.game.gameplayYoutubeUrl} target="_blank">clique aqui</a>
          </S.link>
          <S.link>
          <h3>Trailer:</h3>
          <a href={props.game.trailerYoutubeUrl} target="_blank">clique aqui</a>
          </S.link>

        </S.DetailsContent>

        </Modal>
    </S.GamesItem>
  );
};

export default Card;
