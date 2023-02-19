import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import PasswordInputComponent from './PasswordInput';


export default {
  title: 'PasswordInput',
  component: PasswordInputComponent,
  argTypes: {
    value: { control: 'text' },
    fullWidth: { control: 'boolean' },
    onChange: {
      action: 'change',
    },
  },
} as ComponentMeta<typeof PasswordInputComponent>;

const Template: ComponentStory<typeof PasswordInputComponent> = (args) => {
  const [ , updateArgs ] = useArgs();
  const onChange = (value: string) => updateArgs({ value });

  return (
    <PasswordInputComponent
      {...args}
      onChange={(value) => {
        action('change')(value);
        onChange(value);
      }}
    />
  );
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: 'Пароль',
  value: '',
};

