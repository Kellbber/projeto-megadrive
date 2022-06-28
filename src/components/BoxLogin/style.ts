import styled, { css } from "styled-components";
import back from "assets/icons/back.png";
import gamer from "assets/icons/gamer.png";
import cadeado from "assets/icons/password.png";
export const BoxLogin = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    width: 330px;
    height: 414px;
    padding: 10px 20px 35px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    box-shadow: 3px 3px 6px 3px ${theme.colors.baseBg3};
    color: ${theme.colors.textColor};
  `}
`;
export const BoxLoginBack = styled.img`
  ${() => css`
    background: url(${back});
    background-size: contain;
    display: flex;
    justify-content: flex-Homepage;
    padding: 1.5rem;
    cursor: pointer;
    align-self: flex-end;
  `}
`;
export const BoxLoginText = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
  `}
`;
export const BoxLoginForm1 = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    input {
      background-color: ${theme.colors.baseBg2};
      border: 3px solid ${theme.colors.baseBg2};
      border-radius: 4px;
      outline: none;
      width: 100%;
      padding: 0.5rem 0 0.5rem 0.5rem;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.bodyFontSize};
      color: ${theme.colors.textColor};
    }
    img {
      background: url(${gamer});
      background-size: contain;
      background-repeat: no-repeat;
      padding: 1.5rem;
      margin-left: -2rem;
    }
  `}
`;
export const BoxLoginForm2 = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    input {
      background-color: ${theme.colors.baseBg3};
      border: 3px solid ${theme.colors.baseBg3};
      border-radius: 4px;
      outline: none;
      width: 100%;
      padding: 0.5rem 0 0.5rem 0.5rem;
      font-family: ${theme.constants.bodyFontFamily};
      font-size: ${theme.constants.bodyFontSize};
      color: ${theme.colors.textColor};
    }
    img {
      background: url(${cadeado});
      background-size: contain;
      background-repeat: no-repeat;
      padding: 1.5rem;
      margin-left: -2rem;
    }
  `}
`;
export const BoxLoginQuestion = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-family: ${theme.constants.headingFontFamily};
    text-align: center;
    a {
      padding: 0 0 0 0.5rem;
      cursor: pointer;
      color: ${theme.colors.baseBg2};
    }
    text {
      color: ${theme.colors.baseBg3};
    }
  `}
`;
