import styled, { css } from "styled-components";
import send from 'assets/icons/acept.png'
export const ButtonLarge = styled.button`
	${({ theme }) => css`
		background: url(${send});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 2rem;
        padding: 3rem;
		cursor: pointer;
		&:disabled {
			color: ${theme.colors.textDark};
			background: ${theme.colors.baseBg1};
			box-shadow: none;
			cursor: not-allowed;
		}
	`}
`;