import { FooterStyled, FooterContainer, FooterTitle, AppList } from './styles';
import { Typography, Box } from '@material-ui/core';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2, textAlign: "justify" }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito
            para realizar a limpeza da sua casa. Garantimos a melhor
            profissional com total segurança e praticidade! São milhares
            de clientes satisfeitos por todo país.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt="Google Play" />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt="AppStore" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
