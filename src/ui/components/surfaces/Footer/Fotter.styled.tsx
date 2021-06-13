import { experimentalStyled as styled } from "@material-ui/core/styles";

export const FooterStyled = styled("footer")`
	background-color: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;
