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
    background-color: ${theme.colors.baseBg2};
    width: 100%;
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
    h1 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.headingFontSize};
    }
  `}
`;
