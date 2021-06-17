import { experimentalStyled as styled } from '@material-ui/core/styles';

export const SafeEnverionmentContainer = styled('div')`
    color: ${({ theme: { palette } }) => palette.text.secondary};
    background-color: ${({ theme: { palette } }) => palette.background.default};
    text-align: right;
    padding: ${({ theme: { spacing } }) => spacing(2)} 0;
    font-size: 12px;

`