import { ButtonHTMLAttributes } from 'react';
import * as S from './style'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonLarge = ({...ButtonType}: ButtonType) => {
  return (
    <S.ButtonLarge{...ButtonType}>
        
    </S.ButtonLarge>
  )
}

export default ButtonLarge;