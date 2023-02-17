import * as React from 'react';
import styles from './ButtonGroup.module.css';
import { ButtonTypes } from '../Button';


interface Props {
  type: ButtonTypes['type'];
  children: JSX.Element[];
}

const ButtonGroup: React.FC<Props> = (props) => {
  const { type, children } = props;

  return (
    <div className={styles.buttonGroup}>
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
