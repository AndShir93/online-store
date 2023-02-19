import * as React from 'react';
import { generateClassName } from '../../../utils/generateClassName';
import styles from './Input.module.css';


interface Props {
  value: string;
  label?: string;
  type?:  React.HTMLInputTypeAttribute;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

type HandleChange = (props: Props, value: string) => void;

const handleChange: HandleChange = (props, value) => {
  const { onChange } = props;

  onChange && onChange(value);
};

const Input: React.FC<Props> = (props) => {
  const {
    value,
    label,
    type = 'text',
    className = '',
    fullWidth,
    disabled,
    onBlur,
  } = props;
  const inputClassName = generateClassName([
    styles.input,
    fullWidth ? styles.inputFullWidth : '',
    className,
  ]);

  return (
    <label>
      {label && <p className={styles.label}>{label}</p>}
      <input
        type={type}
        value={value}
        className={inputClassName}
        disabled={disabled}
        onChange={({ target: { value: newValue } }) => handleChange(props, newValue)}
        onBlur={() => onBlur && onBlur(value.trim())}
      />
    </label>
  );
};

export default Input;
