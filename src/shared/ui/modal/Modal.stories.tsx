import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../button/Button';
import { Text } from '../text/Text';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <Text variant="h3">Modal Title</Text>
        <Text variant="body">This is the modal content.</Text>
        <Button>Close</Button>
      </>
    ),
  },
};