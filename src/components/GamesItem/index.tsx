import SaveButton from "components/SaveButton";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "react-modal";
import { deleteGame, updateGame } from "services/gamesService";
import { findGenres } from "services/genreService";
import * as S from "./style";
import {useNavigate, useParams} from 'react-router-dom'
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
interface cardProps {
  game: {
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
  };
  user: {
    name: string;
    email: string;
    id: string;
    isAdmin: boolean;
  };
}
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
const Card = ({ game, user }: cardProps) => {

  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genres[]>([]);

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
    console.log(upGame)
   const response = await updateGame.update(game.id, upGame);

    console.log(response.data)
    closeModal();
    
    
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const getAllGenres = async () => {
    const response = await findGenres.allGenres();
    console.log(response);
    setGenres(response.data);
  };
  useEffect(() => {
    getAllGenres();
  }, []);
  return (
    <S.GamesItem>
      <S.GamesItemImage src={game.coverImageUrl} alt="Imagem do jogo" />
      <div>
        <h2>{game.title}</h2>
        <p>{game.imdbScore}</p>
      </div>
      <S.admIcons>
        <div>
          <AiFillHeart size={20} cursor="pointer" />
        </div>
        <div>
          <BiPurchaseTag size={20} cursor="pointer" />
        </div>
        <div>
          <FiEdit
            size={20}
            display={user.isAdmin ? "flex" : "none"}
            onClick={openModal}
            cursor="pointer"
          />
        </div>

        <div>
          <AiFillDelete
            size={20}
            display={user.isAdmin ? "flex" : "none"}
            cursor="pointer"
            onClick={() => {
              deleteGame.delete(game.id);
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
            defaultValue={game.title}
          />
          <label htmlFor="genre">Genre:</label>
          <select name="genre" defaultValue={game.genres[0].name}>
            {genres?.map((genre: Genres, index) => (
              <option key={index}>{genre.name}</option>
            ))}
          </select>
          <label htmlFor="image">Image:</label>
          <input type="text" defaultValue={game.coverImageUrl} name="image" />
          <label htmlFor="description">Description:</label>
          <textarea
            rows={4}
            cols={50}
            defaultValue={game.description}
            name="description"
          />
          <label htmlFor="year">Year:</label>
          <input type="number" defaultValue={game.year} name="year" />
          <label htmlFor="imdbScore">Score:</label>
          <input type="number" defaultValue={game.imdbScore} name="imdbScore" />
          <label htmlFor="trailer">Trailer:</label>
          <input
            type="text"
            defaultValue={game.trailerYoutubeUrl}
            name="trailer"
          />
          <label htmlFor="gameplay">Gameplay:</label>
          <input
            type="text"
            defaultValue={game.gameplayYoutubeUrl}
            name="gameplay"
          />
          <SaveButton type="submit" />
        </S.ModalStyle>
      </Modal>
    </S.GamesItem>
  );
};

export default Card;
