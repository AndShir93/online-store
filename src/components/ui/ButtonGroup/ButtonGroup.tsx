import * as React from 'react';
import styles from './ButtonGroup.module.css';
import { ButtonTypes } from '../Button';


interface Props {
  type: ButtonTypes['type'];
  className?: string;
  children: JSX.Element[];
}

const ButtonGroup: React.FC<Props> = (props) => {
  const {
    type,
    className = '',
    children,
  } = props;
  const rootClassName = [ styles.buttonGroup, className ].join(' ').trim();

  return (
    <div className={rootClassName}>
      {children.map((button) => ({
        ...button,
        props: {
          ...button.props,
          type,
        },
      }))}
    </div>
  );
};

export default ButtonGroup;
