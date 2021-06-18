import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

export const FormElementsContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme: { spacing } }) => spacing(5)};
    max-width: 650px;
    margin: 0 auto ${({ theme: { spacing } }) => spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
    padding: ${({ theme: { spacing } }) => spacing(7)};
    margin: 0 auto ${({ theme: { spacing } }) => spacing(10)};

    ${({ theme: { breakpoints } }) => breakpoints.down("md")}{
        &.MuiPaper-root{
            padding: 0;
            box-shadow: none;
        }
    }
`;

export const ProfissionaisContainer = styled("div")`
    display: grid;
    grid-template-columns: 1fr;
    ${({ theme: { breakpoints } }) => breakpoints.up("md")}{
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme: { spacing } }) => spacing(6)};
    };

    ${({ theme: { breakpoints } }) => breakpoints.down("md")}{
        margin-left: ${({ theme: { spacing } }) => spacing(-2)};
        margin-right: ${({ theme: { spacing } }) => spacing(-2)};

        > :nth-of-type(odd){
            background-color:  ${({ theme: { palette } }) => palette.background.paper};
        }
    };
`;