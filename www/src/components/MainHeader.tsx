import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

interface Props {
  title: string;
  illustration: string;
  children?: React.ReactNode;
  subtitle: React.ReactNode;
}

export const MainHeader: FunctionComponent<Props> = (props) => {
  const { children, title, subtitle, illustration } = props;
  return (
    <Wrapper>
      <div className="flex flex-col px-5 pt-5 lg:flex-row max-w-screen-xl mx-auto md:items-center">
        <section className="lg:w-1/2 lg:pr-20">
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-tight mb-3">
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </h1>
          <div className="text-base">{subtitle}</div>
          <div className="flex flex-col md:justify-center lg:justify-start md:flex-row py-8">
            {children}
          </div>
        </section>
        <div className="flex-1">
          <img src={illustration} alt={title} />
        </div>
      </div>
    </Wrapper>
  );
};
