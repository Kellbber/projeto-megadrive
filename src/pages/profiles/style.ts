import styled, { css } from 'styled-components'
import background from 'assets/images/background.jpg'

type imageUser={
    image: string;
}
export const ProfileContent = styled.section`
${({theme})=>css`
    width: 100vw;
    height: 100vh;

    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
`}

`
export const ProfileMain = styled.main`
  ${() => css`
    
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
    
  `}
`;
export const ProfileHeaderDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
  padding: 0.2rem;

    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
    
  `}
`;

export const ProfileHeaderDetailsImg = styled.img`
  ${() => css`
 
    background-size: cover;
    display: flex;
    justify-content: flex-Homepage;
    padding: 2.5rem;
    margin-right: 2rem;
  `}
  `;