import * as S from "./style";

import { useEffect, useState } from "react";
import { userService } from "services/userService";

interface Profiles{
  title: string;
  imageCoverUrl: string;
  gameId?: string;
  favoriteGameId?: string;
  userId: string;
}
interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}
const Profile = () => {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [userLogged, setUserLogged]= useState<User>({
    _id: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
  })
const jwt = localStorage.getItem('jwtLocalStorage')

const getUserLogged = async ()=>{
  // const response = await userService.findUserById();

}
useEffect(()=>{
getUserLogged();
},[])
  return (
    <S.ProfileContent>
      <S.ProfileMain>
        <h1>aqui fica o profile</h1>
      </S.ProfileMain>
      <header>
        <S.ProfileHeaderDetails>
          aqui ficará o nome do profile
        </S.ProfileHeaderDetails>
      </header>
    </S.ProfileContent>
  );
};
export default Profile;
