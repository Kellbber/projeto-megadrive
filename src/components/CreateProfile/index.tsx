import { useState } from 'react';

import ButtonLarge from 'components/ButtonLarge';
import { useNavigate } from 'react-router-dom';
import { createProfile } from 'services/profileService';
import { Profile } from 'types/profile-type';
import * as S from './style';


const CreateProfile = () => {

const Navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
      }

    function closeModal() {
        setIsOpen(false);
      }

      async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newProfile: Profile = {
          title: event.currentTarget.Name.value,
        imageUrl: event.currentTarget.imageUrl.value,
        };

       const req = await createProfile.createProfile(newProfile);
        if (req?.status === 201) {
          Navigate("/profile");
      };
    }
function goToProfiles(){
    Navigate('/profile')
}
  return (
    <S.BoxLogin onSubmit={handleSubmit}>
      <S.BoxLoginBack>
        <img onClick={goToProfiles} />
      </S.BoxLoginBack>
      <S.BoxLoginText>Create Profile</S.BoxLoginText>
      <S.BoxLoginForm1 posit={true}>
        <input type="text" placeholder="Title" name="Name" required  />
      </S.BoxLoginForm1>
      <S.BoxLoginForm1 posit={false}>
        <input type="text" placeholder="Image:" name="imageUrl" required />
      </S.BoxLoginForm1>
      <ButtonLarge />
    </S.BoxLogin>
  )

}
export default CreateProfile;