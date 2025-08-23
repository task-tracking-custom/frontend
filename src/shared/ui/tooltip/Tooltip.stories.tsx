import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    children: <Button>Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'bottom',
    children: <Button>Hover me</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'left',
    children: <Button>Hover me</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'right',
    children: <Button>Hover me</Button>,
  },
};