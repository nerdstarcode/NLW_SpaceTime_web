import type { Meta, StoryObj } from '@storybook/react';

import { AnchorButton, IAnchorButton } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Atoms/AnchorButton',
  component: AnchorButton,
  tags: ['autodocs'],
  args: {
    children: 'Eu sou um AnchorButton',
    href: '/'
  },
  argTypes: {
    children: {
      description: 'Conteudo interno do botão, pode se adicionar tudo o que poderia ser adicionado dentro de uma tag <a/> ⚓'
    },
    href: {
      description: 'É a propriedade da tag <a/> href, é o link que será aberto ao clicar, pode ser undefined tranquilo.'
    }
  },
} as Meta<IAnchorButton>

type Story = StoryObj<IAnchorButton>;

export const Primary: Story = {
  args: {
  },
};

