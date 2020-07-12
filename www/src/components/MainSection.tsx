import { FunctionComponent } from 'react';
import { Container } from './Container';

interface Props {
  children: React.ReactNode;
}

export const MainSection: FunctionComponent<Props> = (props) => {
  return (
    <section className="bg-whitesmoke-100 mt-12 py-12 md:py-20">
      <Container>{props.children}</Container>
    </section>
  );
};
