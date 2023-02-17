import * as React from 'react';


export interface Props {
  type?: 'primary' | 'secondary' | 'gray';
  variant?: 'default' | 'outlined' | 'text';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
