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
  ${() => css`
    
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;
