import styled, { css } from "styled-components";
import background from "assets/images/background.jpg";

export const allGames = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;
export const allGamesContent = styled.main`
  ${({ theme }) => css`

    width: 100%;
    padding: 1rem;

    height: 100vh;
    box-sizing: border-box;
    h1 {
      font-family: ${theme.constants.headingFontFamily};
      font-size: ${theme.constants.headingFontSize};
      text-align: center;
    }
    section{
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  `}
`;
export const adminSettings = styled.div`
  ${({ theme }) => css`
    width: 10%;

    height: 30px;
    border-radius: 1rem;
    
    display: flex;

    background-color: ${theme.colors.baseBg1};
    height: 30px;
    border-radius: 1rem;
    align-self: flex-end;
    justify-content: space-around;
  `}
`;

export const buttonModal = styled.button`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: transparent;
  border: none;
  button {
    border: none;
    background-color: transparent;
    display: flex;
    cursor: pointer;
    
    margin: 0;
  }
`;

export const UserModal = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
   
    
    justify-content: center;
    flex-direction: column;
    align-items: center;
   
    label {
      align-self: flex-start;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1rem;
      font-weight: ${theme.constants.bodyLineHeight};
      margin-bottom: 0.1rem;
      color: ${theme.colors.textColor};
    }
    input {
      background-color: ${theme.colors.baseBg2};
      margin-bottom: 1rem;
      width: 100%;
      border-radius: 2rem;
      border: 1px solid black;
      outline: none;
      padding: 0.5rem;
    }
    select{
      width: 100%;
      border-radius: 1rem;
      background-color: ${theme.colors.baseBg2};
      font-family: ${theme.constants.bodyFontFamily};
      margin: .5rem 0 .5rem 0;
    }
    h1{
      font-family: ${theme.constants.headingFontFamily};
      font-size: 1rem;
      color: ${theme.colors.textColor};
      text-align: center;
    }
  `}
`;