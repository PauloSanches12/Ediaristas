import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Avatar, Rating } from '@material-ui/core';

export const UserInformationContainer = styled('div')`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 
        'avatar name' 
        'avatar rating' 
        'avatar description';
    background-color: ${({ theme: { palette } }) => palette.grey[50]};
    padding: ${({ theme: { spacing } }) => spacing(3)};
    gap: ${({ theme: { spacing } }) => spacing(0.5) + ' ' + spacing(2)};
    align-items: center;
`;

export const UserName = styled('div')`
    grid-area: name;
    font-weight: bolder;
    color: ${({ theme: { palette } }) => palette.text.primary};
    font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const UserDescription = styled('div')`
    grid-area: description;
    color: ${({ theme: { palette } }) => palette.text.secondary};
    font-size: ${({ theme: { typography } }) => typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
    grid-area: avatar;
    width: 100%;
    height: initial;
    aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
    grid-area: rating;
    font-size: 14px;
`;