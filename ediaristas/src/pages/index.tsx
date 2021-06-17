import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/userInformation";
import SafeEnvironment from "ui/components/FeedBack/SafeEnvironment";


export default function Home() {
  return (
    <>
      <SafeEnvironment />
      <PageTitle title={"Conheça os profissionais"} subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"} />

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
    </>
  )
}
