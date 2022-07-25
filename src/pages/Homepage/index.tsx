import ButtonLarge from "components/ButtonLarge";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  RiArrowGoBackLine,
  RiDeleteBin5Line,
  RiUserSettingsFill,
} from "react-icons/ri";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { homepageGames } from "services/homeService";
import {
  deleteProfile,
  favoriteGame,
  findProfileById,
  updateProfile,
} from "services/profileService";
import swall from "sweetalert";
import * as S from "./style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "",
    borderRadius: "1rem",
  },
};

Modal.setAppElement("#root");

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
interface GamesProfile {
  favoriteGames?: {
    games?: Games[];
  };
  games?: [
    {
      genre: string;
      title: string;
      id: string[];
    }
  ];
}
interface Games {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;

  trailerYoutubeUrl: string;
  genres: string;
}

interface Profile {
  imageUrl: string;
  title: string;
}

const Homepage = () => {
  const getHomeGames = async () => {
    if (id) {
      const get = await homepageGames.allGames(id);
      console.log(get.data);
      setGamesProfile(get.data);
      setControl(false);
    }
  };

  const navigate = useNavigate();
  function goToAllGames(id: string) {
    navigate(`/allgames/${id}`);
  }
  function goToProfile() {
    navigate("/profile");
  }
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { id } = useParams();
  const [control, setControl] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profiles>();

  const [gamesProfile, setGamesProfile] = useState<GamesProfile>();

  const getProfileById = async () => {
    const response = await findProfileById.profileById(id ?? "");
    setProfile(response.data);
  };

  const deleteProfileSelected = async () => {
    if (id) {
      await deleteProfile.delete(id);
    }
    swall({
      title: "Certinho!",
      text: "Profile deletado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    navigate("/profile");
  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const upProfile: Profile = {
      imageUrl: event.currentTarget.imageUrl.value,
      title: event.currentTarget.Title.value,
    };
    if (id) {
      const response = await updateProfile.update(id, upProfile);
      setProfile(response.data);
      swall({
        title: "Certinho!",
        text: "Profile alterado com sucesso!",
        icon: "success",
        timer: 3000,
      });
      getProfileById();
      closeModal();
    }
  }

  useEffect(() => {
    if (id) {
      getProfileById();
    }
    getHomeGames();
  }, [control]);

  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return (
    <S.Homepage>
      <S.HomepageContent>
        <S.HomepageGameTitle>Favorite Games</S.HomepageGameTitle>
        <S.HomepageGameDiv>
          {gamesProfile?.favoriteGames?.games?.map((game, index) => (
            <S.uniqueCardGame key={index}>
              <S.iconFavorite>
                <AiFillHeart
                  size={25}
                  color="red"
                  cursor="pointer"
                  onClick={() => {
                    favoriteGame.favorite(id ?? "", game.id);
                    setControl(true);
                  }}
                />
              </S.iconFavorite>
              <img src={game.coverImageUrl} alt="" />
              <h5>{game.title}</h5>
              <p>Score: {game.imdbScore}</p>
            </S.uniqueCardGame>
          ))}
        </S.HomepageGameDiv>
        <S.HomepageGameTitle>Purchased Games</S.HomepageGameTitle>
        <S.HomepageGameDiv>
          {gamesProfile?.games?.map((game, index) => (
            <S.uniqueCardGame key={index}>
              <AiFillHeart
                color={
                  gamesProfile.favoriteGames?.games?.find(
                    (gameFav: Games) => gameFav.id === game.id[0]
                  )
                    ? "red"
                    : "gray"
                }
                size={20}
                cursor="pointer"
                onClick={() => {
                  favoriteGame.favorite(id ?? "", game.id[0]);
                  setControl(true);
                }}
              />

              <S.favoriteBox>
                <h5>Nome: {game.title}</h5>
                <h5>Gênero: {game.genre}</h5>
              </S.favoriteBox>
            </S.uniqueCardGame>
          ))}
        </S.HomepageGameDiv>
      </S.HomepageContent>
      <S.HomepageHeaderDetails>
        <S.HomepageHeaderDetailsDate>
          <S.settingsIcons>
            <RiArrowGoBackLine
              cursor="pointer"
              size={25}
              onClick={goToProfile}
            />
            <RiUserSettingsFill
              size={25}
              cursor="pointer"
              onClick={openModal}
            />
          </S.settingsIcons>
          <S.HomepageHeaderDetailsImg />
          <S.HomepageHeaderDetailsText onClick={goToProfile}>
            {profile?.title}
          </S.HomepageHeaderDetailsText>
          <S.HomepageHeaderDetailsText>
            {dateDescription}
          </S.HomepageHeaderDetailsText>
          <button
            onClick={() => {
              goToAllGames(id ?? "");
            }}
          >
            MORE GAMES
          </button>
        </S.HomepageHeaderDetailsDate>
      </S.HomepageHeaderDetails>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.BoxProfileModal onSubmit={handleSubmit}>
          <S.BoxProfileBack>
            <img onClick={closeModal} />
          </S.BoxProfileBack>
          <S.BoxProfileText>Edit Profile</S.BoxProfileText>
          <S.BoxProfileForm>
            <S.BoxProfileForm posit={true}>
              <input
                type="text"
                placeholder="title"
                name="Title"
                defaultValue={profile?.title}
              />
            </S.BoxProfileForm>
            <S.BoxProfileForm posit={false}>
              <input
                type="text"
                placeholder="ImageUrl"
                name="imageUrl"
                defaultValue={profile?.imageUrl}
              />
            </S.BoxProfileForm>
            <ButtonLarge type="submit" />
            <S.BoxProfileText>
              Gostaria de deletar?{" "}
              <RiDeleteBin5Line
                size={25}
                color="red"
                cursor="pointer"
                onClick={deleteProfileSelected}
              />
            </S.BoxProfileText>
          </S.BoxProfileForm>
        </S.BoxProfileModal>
      </Modal>
    </S.Homepage>
  );
};

export default Homepage;
