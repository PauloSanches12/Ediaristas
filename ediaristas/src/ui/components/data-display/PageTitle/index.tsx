import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from "./styles";

interface PageTitleProps {
  title: String;
  subtitle: String | JSX.Element
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled> {title} </PageTitleStyled>
      <PageSubtitleStyled> {subtitle} </PageSubtitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;
