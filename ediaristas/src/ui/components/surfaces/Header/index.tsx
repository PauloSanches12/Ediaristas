import { HeaderAppBar, HeaderLogo } from './styles';
import { Toolbar, Container } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'} />
      </Toolbar>
    </HeaderAppBar>
  );
}

export default Header;
