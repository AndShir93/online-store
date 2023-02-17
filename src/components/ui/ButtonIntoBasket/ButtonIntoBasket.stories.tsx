import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonIntoBasketComponent from './ButtonIntoBasket';


export default {
  title: 'ButtonIntoBasket',
  component: ButtonIntoBasketComponent,
} as ComponentMeta<typeof ButtonIntoBasketComponent>;

const Template: ComponentStory<typeof ButtonIntoBasketComponent> = (args) => (
  <ButtonIntoBasketComponent {...args} />
);

export const ButtonIntoBasket = Template.bind({});

