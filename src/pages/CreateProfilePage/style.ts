import styled, {css} from 'styled-components'
import background from '../../assets/images/background.jpg'
export const Create = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

  `}
`;
