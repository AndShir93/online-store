import * as React from 'react';
import styles from './Input.module.css';


interface Props {
  value: string;
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
}

type HandleChange = (props: Props, value: string) => void;

const handleChange: HandleChange = (props, value) => {
  const { onChange } = props;

  onChange(value);
};

const Input: React.FC<Props> = (props) => {
  const {
    value,
    label,
    disabled,
    onBlur,
  } = props;

  return (
    <label>
      {label && <p className={styles.label}>{label}</p>}
      <input
        type="text"
        value={value}
        className={styles.input}
        disabled={disabled}
        onChange={({ target: { value: newValue } }) => handleChange(props, newValue)}
        onBlur={() => onBlur(value.trim())}
      />
    </label>
  );
};

export default Input;
