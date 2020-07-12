import { FunctionComponent } from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Container: FunctionComponent<Props> = (props) => {
  return <div className="max-w-screen-xl mx-auto px-5">{props.children}</div>;
};
