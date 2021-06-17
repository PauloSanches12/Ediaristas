import PageTitle from "ui/components/data-display/PageTitle";
import SafeEnvironment from "ui/components/FeedBack/SafeEnvironment";


export default function Home() {
  return (
    <>
      <SafeEnvironment />
      <PageTitle title={"Conheça os profissionais"} subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"} />
    </>
  )
}
