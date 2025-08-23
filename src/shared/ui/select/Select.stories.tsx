import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <option key="1" value="option1">Option 1</option>,
      <option key="2" value="option2">Option 2</option>,
      <option key="3" value="option3">Option 3</option>,
    ],
  },
};