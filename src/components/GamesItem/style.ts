import styled, { css } from "styled-components";

export const GamesItem = styled.div`
	${({ theme }) => css`
		background: ${theme.colors.baseBg1};
		border-radius: 16px;
		display: flex;
		font-family: ${theme.constants.bodyFontFamily};
		font-size: .8rem;
		align-items: center;
		justify-content: center;
		width: 50%;

		margin-bottom: 1rem;
		cursor: pointer;
	
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 80%;

		}
	`}
`;

export const GamesItemImage = styled.img`

		width: 150px;
		

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