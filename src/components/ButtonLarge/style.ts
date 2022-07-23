import styled, { css } from "styled-components";
import send from 'assets/icons/acept.png'
export const ButtonLarge = styled.button`
	${() => css`
		background: url(${send});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
		outline: none;
        margin-top: 2rem;
        width: 10%;
		padding: 3rem;
		cursor: pointer;
        align-self: center;
        border: none;
        list-style: none;

	`}
`;