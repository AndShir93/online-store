import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import InputComponent from './Input';


export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: false,
    },
    className: { control: false },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: {
      action: 'change',
    },
    onBlur: {
      action: 'blur',
    },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => {
  const [ , updateArgs ] = useArgs();
  const onChange = (value: string) => updateArgs({ value });
  const onBlur = (value: string) => updateArgs({ value });

  return (
    <InputComponent
      {...args}
      onChange={(value) => {
        action('change')(value);
        onChange(value);
      }}
      onBlur={(value) => {
        action('blur')(value);
        onBlur(args.value.trim());
      }}
    />
  );
};

export const Input = Template.bind({});

Input.args = {
  label: 'Label',
  value: '',
  disabled: false,
  fullWidth: false,
};

