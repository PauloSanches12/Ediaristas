import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

export const FooterStyled = styled('footer')`
    background-color: ${({ theme: { palette } }) => palette.primary.main};
    color: ${({ theme: { palette } }) => palette.getContrastText(palette.primary.main)};
    padding: ${({ theme: { spacing } }) => spacing(4)} 0;
    margin-top: auto;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme: { spacing } }) => spacing(2)};
    flex-wrap: wrap;

    ${({ theme: { breakpoints } }) => breakpoints.down("md")}{
        gap: ${({ theme: { spacing } }) => spacing(5)};
    };
`;

export const FooterTitle = styled((props) => (
    <Typography component={'h2'} variant={'body2'} {...props} />
))`
    font-weight: bold;
`;

export const AppList = styled('ul')`
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: ${({ theme: { spacing } }) => spacing()};

    img {
        width: 122px;
    }
`;