import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading 1',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading 2',
    variant: 'h2',
  },
};

export const Body: Story = {
  args: {
    children: 'Body text',
    variant: 'body',
  },
};

export const Caption: Story = {
  args: {
    children: 'Caption text',
    variant: 'caption',
  },
};