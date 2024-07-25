import { PropsWithChildren } from 'react';

type Props = {};

const Free = (props: PropsWithChildren<Props>) => {
  return <>{props.children}</>;
};

export default Free;
