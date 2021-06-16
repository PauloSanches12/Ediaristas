import { experimentalStyled as styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
    text-align: center;
    margin: ${({ theme: { spacing } }) => spacing(5) + ' ' + '0'};
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${({ theme: { palette } }) => palette.primary.main};
    font-size: ${({ theme: { typography } }) => typography.h6.fontSize};
    font-weight: 600;

    ${({ theme: { breakpoints } }) => breakpoints.down('md')}{
        font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
    }
`;

export const PageSubtitleStyled = styled('h3')`
    margin: ${({ theme: { spacing } }) => spacing(1.5) + ' ' + '0'};
    color: ${({ theme: { palette } }) => palette.text.primary};
    font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
    font-weight: normal;
    
    ${({ theme: { breakpoints } }) => breakpoints.down('md')}{
        font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
    }

`;