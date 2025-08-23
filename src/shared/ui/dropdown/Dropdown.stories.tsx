import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Dropdown</Button>,
    items: [
      { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
      { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
      { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
    ],
  },
};