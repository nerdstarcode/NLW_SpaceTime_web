import type { Meta, StoryObj } from '@storybook/react';

import { EmptyMemories } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Molecules/EmptyMemories',
  component: EmptyMemories,
  tags: ['autodocs'],
  args: {
    children: 'Eu sou um EmptyMemories',
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

