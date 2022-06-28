import styled, { css } from "styled-components";
import background from "assets/images/background.jpg";
import login from "assets/icons/login.png";
import search from 'assets/icons/search.png'

export const Start = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vw;
    min-height: 100vh;
    background-position: center;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const StartContent = styled.main`
  ${() => css`
    
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const StartHeaderDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 20rem;
    height: 4rem;

    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
    justify-content: space-between;
  `}
`;
export const StartHeaderRegister = styled.button`
  ${({theme}) => css`
    display: flex;
    justify-content: flex-start;
    width: 30%;
    height: 40%;
    align-self: center;
    text-decoration: none;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.baseBg2};
    border: 3px solid ${theme.colors.baseBg2};
    font-family: ${theme.constants.headingFontFamily};
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;

  `}
`;
export const StartHeaderSignIn = styled.button`
  ${({theme}) => css`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    width: 30%;
    height: 40%;
    justify-content: center;
    margin-right: 2rem;
    text-decoration: none;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.baseBg3};
    border: 3px solid ${theme.colors.baseBg3};
    font-family: ${theme.constants.headingFontFamily};
    border-radius: 10px;
    cursor: pointer;
  `}
`;
export const StartHeaderDetailsDate = styled.p`
  ${({theme}) => css`
    text-transform: capitalize;
    text-align: center;
    font-family: ${theme.constants.bodyFontFamily} ;
  `}
`;

export const StartHeaderDetailsImg = styled.img`
  ${() => css`
    background: url(${login});
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    padding: 2rem;
  `}
`;

export const StartHeaderDetailsSearch = styled.div`
${({theme})=> css`
margin-top: 10px;
margin-left: 10px;
display: flex;
align-items: center;
gap: 10px;

${theme.mixins.input()};
padding-top: 0;
padding-bottom: 0;
padding-right: 0;
input{
  background: transparent;
  border: none;
  height: 80%;
  width: 100%;
  color: ${theme.colors.textColor};
  outline: none;
  font-family: ${theme.constants.bodyFontFamily};
}
img{
  background: url(${search});
  background-size: cover;
  padding: 1rem;
  
}
`}
`
export const StartGameTitle = styled.h2`
${({theme})=> css`
  font-family: ${theme.constants.headingFontFamily};
  margin-top: 1rem;
  color: ${theme.colors.textColor};
  b{
    position: relative;
    &::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -13px;
    width: 100%;
    height: 4px;
    background-color: ${theme.colors.baseBg2};
    border-radius: 5rem;
    }
  }
`}
`

export const StartGameList = styled.div`
${()=>css`
margin-top: 25px;
padding-bottom: 25px;

`}
`
export const StartGameListGap = styled.div`
  ${({theme})=> css`
    width: 200px;
  `}
`