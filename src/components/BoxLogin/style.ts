import back from "assets/icons/back.png";
import styled, { css } from "styled-components";
import { colors } from 'assets/styles/colors'
import theme from 'assets/styles/theme'
type ColorInput = {
  posit?: number;
  image?: Element;
};
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
    align-items: center;
    box-shadow: 3px 3px 6px 3px ${theme.colors.baseBg3};
    color: ${theme.colors.textColor};
  `}
`;
export const BoxLoginBack = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-end;
    height: 10%;
    img {
      background: url(${back});
      background-size: contain;
      display: flex;
      align-self: flex-start;
      padding: 1.5rem;
      cursor: pointer;
      align-self: flex-end;
    }
  `}
`;
export const BoxLoginText = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
  `}
`;
export const BoxLoginForm1 = styled.form<ColorInput>`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 80%;
  flex-direction: column;
  
  input {
    background-color: ${(props) => {
      if (props.posit===1) {
        return colors.baseBg2;
      } else {
        return colors.baseBg3;
      }
    }};
    margin-bottom: 1rem;
    border: ${(props) => {
      if (props.posit===1) {
        return `3px solid ${colors.baseBg2}`;
      } else {
        return `3px solid ${colors.baseBg3}`;
      }
      
    }
    };
    border-radius: 4px;
    outline: none;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: ${theme.constants.bodyFontSize};
    color: ${theme.colors.textColor};
  }
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
