import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['fill', 'outline', 'underline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    placeholder: 'Fill input',
    variant: 'fill',
  },
};

export const Outline: Story = {
  args: {
    placeholder: 'Outline input',
    variant: 'outline',
  },
};

export const Underline: Story = {
  args: {
    placeholder: 'Underline input',
    variant: 'underline',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg',
  },
};