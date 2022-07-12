import * as S from './style';


import { useEffect, useState } from 'react';
import { findProfiles } from 'services/profileService';


const Profile = () => {
  const [profiles, setProfiles]= useState([]);

  async function getProfile(){
    const ProfileList = await findProfiles.allProfiles();
    setProfiles(ProfileList)
  }

  useEffect(()=>{
    getProfile();
  }, [])
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
 
  )

  }
export default Profile;