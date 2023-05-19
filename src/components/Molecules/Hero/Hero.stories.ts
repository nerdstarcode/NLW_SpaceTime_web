import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Molecules/Hero',
  component: Hero,
  tags: ['autodocs'],
  args: {
    children: 'Eu sou um Hero',
    href: '/'
  },
  argTypes: {
    children: {
    },
    href: {

    }
  },
} as Meta<any>

export const Primary: StoryObj<any> = {
  args: {
  },
};

