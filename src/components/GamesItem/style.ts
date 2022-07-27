import styled, { css } from "styled-components";
import back from "../../assets/icons/back.png";
export const GamesItem = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    border-radius: 16px;
    display: flex;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
    width: 30%;

    margin-bottom: 1rem;


  `}
`;

export const Games = styled.div`
   
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    
`
export const admIcons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  div {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
export const GamesItemImage = styled.img`
  width: 150px;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

export const GamesItemName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const GamesItemPrice = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;

export const GamesItemDescription = styled.small`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
  `}
`;

export const ModalStyle = styled.form`
${({theme})=>css`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${theme.constants.headingFontFamily};
  font-size: 1rem;

  button {
    background: transparent;
    border: none;
    justify-content: flex-end;
    align-items: flex-end;
  }
  img {
    background: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0.5rem;
    cursor: pointer;
  }
  label{
    color: ${theme.colors.textColor}
  }
  input {
    margin: .5rem 0 .5rem 0;
    outline: none;
    width: 100%;
    border-radius: 2rem;
    align-self: center;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: .8rem;
  }
  textarea{
    margin: .5rem 0 .5rem 0;
    border-radius: .5rem;
  }
  `}
`;
export const DetailsContent = styled.main`
  ${({ theme }) => css`
    width: 100%;
    
    overflow: auto;
    height: 90vh;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${theme.colors.baseBg1};
    border-radius: 1rem;
    align-items: center;
  `}
`;

export const title = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.constants.headingFontFamily};
    text-align: center;
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;

  `}
`;
export const img = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  img {
    width: 20%;
    border-radius: 1rem;
  }

`;

export const description = styled.p`
  ${({ theme }) => css`
    width: 90%;
    font-family: ${theme.constants.bodyFontFamily};
    display: flex;
    color: ${theme.colors.textColor};

  `}
`;

export const resume = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    h3{
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1.2rem;
      align-items: center;
      color: ${theme.colors.textColor};
    }
    p{
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 1.5rem;
      color: ${theme.colors.textColor};
      align-items: center;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  `}
`;
export const BoxProfileBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-end;
    height: 10%;
    margin-left: 2rem;
    margin-right: 1rem;
    img {
      background: url(${back});
      background-size: contain;
      display: flex;

      padding: 1.5rem;
      cursor: pointer;
  
    }
  `}
`;

export const link = styled.div`
${({theme})=>css`
    width: 100%;
    color: ${theme.colors.textColor};
    flex-direction: row;
    display: flex;
    justify-content: center;
    h3{
      font-family: ${theme.constants.headingFontFamily};
      text-align: center;
      
    }
    a{
      display: flex;
      list-style: none;
      font-family: ${theme.constants.bodyFontFamily};
      color: ${theme.colors.textColor};
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      cursor: pointer;
      text-decoration: none;
    }
`}

`