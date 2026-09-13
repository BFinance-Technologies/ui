import React, { useState } from 'react';

import { Notification } from '@bfinance/ui';

export default {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
    autoHideDuration: { control: 'number' },
  },
};

const wrapper = {
  position: 'relative',
  height: 120,
};

export const Info = {
  render: (args) => (
    <div style={wrapper}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'info',
    size: 'md',
    title: 'Information',
    description: 'This is an informational notification message.',
    open: true,
  },
};

export const Success = {
  render: (args) => (
    <div style={wrapper}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'success',
    size: 'md',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
    open: true,
  },
};

export const Warning = {
  render: (args) => (
    <div style={wrapper}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'warning',
    size: 'md',
    title: 'Warning',
    description: 'Please review your input before proceeding.',
    open: true,
  },
};

export const Destructive = {
  render: (args) => (
    <div style={wrapper}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'destructive',
    size: 'md',
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    open: true,
  },
};

export const Small = {
  render: (args) => (
    <div style={wrapper}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'info',
    size: 'sm',
    title: 'Compact notification',
    open: true,
  },
};

export const WithActions = {
  render: (args) => (
    <div style={{ position: 'relative', height: 160 }}>
      <Notification {...args} />
    </div>
  ),
  args: {
    status: 'warning',
    size: 'md',
    title: 'Unsaved changes',
    description: 'You have unsaved changes. Do you want to save them?',
    open: true,
    actions: [
      { label: 'Save', variant: 'primary', onClick: () => {} },
      { label: 'Discard', variant: 'secondary', onClick: () => {} },
    ],
  },
};

export const Controlled = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setOpen(true)}>Show notification</button>
        <Notification
          status="success"
          size="md"
          title="Done!"
          description="The operation completed successfully."
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const AutoHide = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setOpen(true)}>Show (auto-hides in 3s)</button>
        <Notification
          status="info"
          size="md"
          title="Auto-hiding notification"
          description="This notification will disappear after 3 seconds"
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
