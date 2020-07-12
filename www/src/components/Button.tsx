import { FunctionComponent, MouseEvent } from 'react';
import { add } from 'lodash';

interface Props {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
  color?: 'primary' | 'secondary' | 'coffee';
  htmlType?: 'button' | 'a';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export const Button: FunctionComponent<Props> = (props) => {
  const {
    color = 'primary',
    target,
    href,
    children,
    prefix,
    suffix,
    onClick,
    htmlType,
  } = props;

  const assignedProps = {
    href,
    target,
    onClick,
    rel: 'noreferrer',
    className: `flex cursor-pointer items-center bg-${color}-100 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none justify-center items-center md:justify-start`,
  };

  if (htmlType === 'a') {
    return (
      <a {...assignedProps}>
        {prefix && prefix}
        <span>{children}</span>
        {suffix && suffix}
      </a>
    );
  }

  return (
    <button {...assignedProps}>
      {prefix && prefix}
      <span>{children}</span>
      {suffix && suffix}
    </button>
  );
};
