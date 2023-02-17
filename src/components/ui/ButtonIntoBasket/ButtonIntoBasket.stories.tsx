import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonIntoBasketComponent from './ButtonIntoBasket';


export default {
  title: 'ButtonIntoBasket',
  component: ButtonIntoBasketComponent,
} as ComponentMeta<typeof ButtonIntoBasketComponent>;

const Template: ComponentStory<typeof ButtonIntoBasketComponent> = () => (
  <ButtonIntoBasketComponent />
);

export const ButtonIntoBasket = Template.bind({});

