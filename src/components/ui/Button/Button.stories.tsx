import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonComponent from './Button';


export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: [ 'primary', 'secondary', 'gray' ],
    },
    variant: {
      control: { type: 'radio' },
      options: [ 'default', 'outlined', 'text' ],
    },
    disabled: {
      type: 'boolean',
    },
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>
    {args.children}
  </ButtonComponent>
);

export const Button = Template.bind({});

