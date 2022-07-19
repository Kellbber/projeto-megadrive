import * as S from "./style";
import swall from "sweetalert";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLoggedService } from "services/authService";
import { findAllProfiles } from "services/profileService";
import { profile } from "console";
import CardProfile from "components/CardProfile";

interface Profiles {
  id: string;
  title: string;
  imageUrl: string;
  gameId?: string;
  favoriteGameId?: string;
  userId: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}
const Profile = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
  });

  const [profileUser, setProfileUser] = useState<Profiles[]>([]);

  useEffect(() => {
    getUserLogged();
    getAllProfiles();
  }, []);
  const jwt = localStorage.getItem("jwt");

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    localStorage.setItem("idUser", response.data.id);
    setUserLogged(response.data);
  };

  const getAllProfiles = async () => {
    if (!jwt) {
      swall({
        title: "ERRO!",
        text: "Faça o login antes de entrar na página de profiles",
        icon: "error",
        timer: 7000,
      });
      navigate("/login");
    } else {
      const response = await findAllProfiles.allProfiles();

      setProfiles(response.data);

      if (profiles) {
        findProfiles(response.data);
      }
    }
  };

  const findProfiles = (profiles: Profiles[]) => {
    const userId = localStorage.getItem("idUser");
    const profile = profiles.filter(
      (profile: any) => profile.userId === userId
    );

    if (profile) {
      setProfileUser(profile);
    }
    console.log(profileUser);
  };

  function goToHomePage(id: string) {
    navigate(`/homepage/${id}`);
  }
  return (
    <S.ProfileContent>
      <S.ProfileMain>
        <S.allCardProfile>
          {profileUser?.map((profile, index) => (
            <S.uniqueCardProfile
              onClick={() => {
                goToHomePage(profile.id);
              }}
              key={index}
            >
              <img src={profile.imageUrl} alt="imagem do perfil" />
              <h1>{profile.title}</h1>
            </S.uniqueCardProfile>
          ))}
        </S.allCardProfile>
      </S.ProfileMain>
    </S.ProfileContent>
  );
};
export default Profile;
