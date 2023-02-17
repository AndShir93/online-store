import * as React from 'react';
import styles from './Button.module.css';
import { Props } from './Button.types';


const Button: React.FC<Props> = (props) => {
  const {
    type = 'primary',
    variant = 'default',
    children,
    className = '',
    disabled,
    onClick,
  } = props;
  const buttonSelector = variant !== 'default' ? `${type}_${variant}` : type;
  const classes = [
    styles.button,
    styles[buttonSelector],
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
