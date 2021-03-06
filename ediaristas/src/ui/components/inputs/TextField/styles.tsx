import { experimentalStyled as styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme: { palette } }) => palette.grey[50]};
    }

    .MuiOutLinedInput-notchedOutline {
        border-color: ${({ theme: { palette } }) => palette.grey[100]};
    }
`;