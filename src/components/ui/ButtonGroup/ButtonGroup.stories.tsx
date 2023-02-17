import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import ButtonGroupComponent from './ButtonGroup';


export default {
  title: 'ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: [ 'primary', 'secondary', 'gray' ],
    },
  },
} as ComponentMeta<typeof ButtonGroupComponent>;

const Template: ComponentStory<typeof ButtonGroupComponent> = (args) => (
  <ButtonGroupComponent {...args}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </ButtonGroupComponent>
);

export const ButtonGroup = Template.bind({});

