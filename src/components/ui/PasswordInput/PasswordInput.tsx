import * as React from 'react';
import { Eye } from '../../../icons';
import { Input } from '../Input';
import styles from './PasswordInput.module.css';


interface Props {
  value: string;
  fullWidth?: boolean;
  onChange: (value: string) => void;
}

type ToggleShowPassword = (
  setType: React.Dispatch<React.SetStateAction<'password' | 'text'>>,
) => void;

const toggleShowPassword: ToggleShowPassword = (setType) => {
  setType((prevState) => (
    prevState === 'password' ? 'text' : 'password'
  ));
};

const PasswordInput: React.FC<Props> = (props) => {
  const state = React.useState<'password' | 'text'>('password');
  const [ type, setType ] = state;
  const {
    value,
    fullWidth,
    onChange,
  } = props;
  const rootFullWidth = fullWidth ? [ styles.root, styles.rootFullWidth ].join(' ') : styles.root;
  const eyeIconActive = type === 'password'
    ? styles.eyeIcon
    : [ styles.eyeIcon, styles.eyeIconActive ].join(' ');

  return (
    <div className={rootFullWidth}>
      <Input
        value={value}
        label="Пароль"
        type={type}
        className={styles.input}
        fullWidth={fullWidth}
        onChange={onChange}
      />
      <Eye
        className={eyeIconActive}
        onClick={() => toggleShowPassword(setType)}
      />
    </div>
  );
};

export default PasswordInput;
