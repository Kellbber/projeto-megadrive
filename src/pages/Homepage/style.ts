import styled, { css } from "styled-components";
import background from "assets/images/background.jpg";
import login from "assets/icons/profile.png";
import search from 'assets/icons/search.png'

export const Homepage = styled.section`
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

export const HomepageContent = styled.main`
  ${() => css`
    
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const HomepageHeaderDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
  padding: 0.2rem;

    background-color: ${theme.colors.baseBg1};
    border-radius: 10px;
    
  `}
`;

export const HomepageHeaderDetailsDate = styled.p`
  ${({theme}) => css`
    text-transform: capitalize;
    text-align: center;
    font-family: ${theme.constants.bodyFontFamily} ;
  `}
`;

export const HomepageHeaderDetailsImg = styled.img`
  ${() => css`
    background: url(${login});
    background-size: cover;
    display: flex;
    justify-content: flex-Homepage;
    padding: 2.5rem;
    margin-right: 2rem;
  `}
`;
export const HomepageHeaderDetailsText = styled.h2`
  ${({theme})=> css`
  background: ${theme.colors.baseBg2};
  font-family: ${theme.constants.headingFontFamily};
  font-size: ${theme.constants.bodyFontSize};
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;
  align-self: center;
  `}




`
export const HomepageGameTitle = styled.h2`
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

export const HomepageGameList = styled.div`
${()=>css`
margin-top: 25px;
padding-bottom: 25px;

`}
`
export const HomepageGameListGap = styled.div`
  ${({theme})=> css`
    width: 200px;
  `}
`