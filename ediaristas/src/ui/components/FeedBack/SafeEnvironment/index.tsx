import { SafeEnverionmentContainer } from './styles'
import { Container } from '@material-ui/core';

const SafeEnvironment = () => {
  return (
    <SafeEnverionmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnverionmentContainer>
  );
}

export default SafeEnvironment;