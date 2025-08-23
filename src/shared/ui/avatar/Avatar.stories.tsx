import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    fallback: 'S',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    fallback: 'L',
    size: 'lg',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://via.placeholder.com/48',
    alt: 'User avatar',
    size: 'md',
  },
};