import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/userInformation";
import SafeEnvironment from "ui/components/FeedBack/SafeEnvironment";
import TextFieldMask from 'ui/components/inputs/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import { FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer } from 'ui/styles/pages/index.style';
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const { cep, setCep, cepValido } = useIndex();
  return (
    <>
      <SafeEnvironment />
      <PageTitle title={"Conheça os profissionais"} subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"} />
      <Container>
        <FormElementsContainer>
          <TextFieldMask mask={"99999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cepValido}
          <Typography color={"error"}>CEP inválido</Typography>
          <Button variant={"contained"} color={"secondary"} sx={{ width: "220px" }}>Buscar</Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Paulo Sérgio"}
              picture={"https://github.com/PauloSanches12.png"}
              rating={5}
              description={"Angico - TO"} />

            <UserInformation
              name={"Diego Fernandes"}
              picture={"https://github.com/diego3g.png"}
              rating={5}
              description={"Santa Catarina"} />

            <UserInformation
              name={"Jason Mayes"}
              picture={"https://github.com/jasonmayes.png"}
              rating={5}
              description={"São Francisco"} />

            <UserInformation
              name={"Max Bbraun"}
              picture={"https://github.com/maxbbraun.png"}
              rating={5}
              description={"São Francisco"} />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>


    </>
  )
}
