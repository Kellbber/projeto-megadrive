import styled, { css } from "styled-components";
import background from "assets/images/background.jpg";

export const Login = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const LoginContent = styled.main`
    ${({theme})=> css`
        width: 100%;
        height: 100%;
        ${theme.mixins.overlay()};
        display: flex;
        justify-content: center;
        align-items: center;
    `}

`