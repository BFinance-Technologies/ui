import React from 'react';
import { IconButton } from "@bfinance/ui";
import { ScanLine } from '@bfinance/icons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    mode: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
    },
    disabled: {
      control: 'boolean',
    },
    ariaLabel: {
      control: 'text',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    ariaLabel: 'Primary icon button',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    shape: 'rounded',
    ariaLabel: 'Secondary icon button',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    size: 'md',
    shape: 'rounded',
    ariaLabel: 'Tertiary icon button',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'md',
    shape: 'rounded',
    ariaLabel: 'Ghost icon button',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const PrimaryDestructive = {
  args: {
    variant: 'primary',
    mode: 'destructive',
    size: 'md',
    ariaLabel: 'Delete',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const SecondaryDestructive = {
  args: {
    variant: 'secondary',
    mode: 'destructive',
    size: 'md',
    ariaLabel: 'Delete',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const TertiaryDestructive = {
  args: {
    variant: 'tertiary',
    mode: 'destructive',
    size: 'md',
    ariaLabel: 'Delete',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const GhostDestructive = {
  args: {
    variant: 'ghost',
    mode: 'destructive',
    size: 'md',
    ariaLabel: 'Delete',
  },
  render: (args) => (
    <IconButton {...args}>
      <ScanLine />
    </IconButton>
  ),
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton {...args} size="lg" ariaLabel="Large"><ScanLine /></IconButton>
      <IconButton {...args} size="md" ariaLabel="Medium"><ScanLine /></IconButton>
      <IconButton {...args} size="sm" ariaLabel="Small"><ScanLine /></IconButton>
      <IconButton {...args} size="xs" ariaLabel="X-Small"><ScanLine /></IconButton>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton {...args} shape="rounded" ariaLabel="Rounded"><ScanLine /></IconButton>
      <IconButton {...args} shape="pill" ariaLabel="Pill"><ScanLine /></IconButton>
    </div>
  ),
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const Variants = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton {...args} variant="primary" ariaLabel="Primary"><ScanLine /></IconButton>
        <IconButton {...args} variant="secondary" ariaLabel="Secondary"><ScanLine /></IconButton>
        <IconButton {...args} variant="tertiary" ariaLabel="Tertiary"><ScanLine /></IconButton>
        <IconButton {...args} variant="ghost" ariaLabel="Ghost"><ScanLine /></IconButton>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <IconButton {...args} variant="primary" mode="destructive" ariaLabel="Primary Destructive"><ScanLine /></IconButton>
        <IconButton {...args} variant="secondary" mode="destructive" ariaLabel="Secondary Destructive"><ScanLine /></IconButton>
        <IconButton {...args} variant="tertiary" mode="destructive" ariaLabel="Tertiary Destructive"><ScanLine /></IconButton>
        <IconButton {...args} variant="ghost" mode="destructive" ariaLabel="Ghost Destructive"><ScanLine /></IconButton>
      </div>
    </>
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton {...args} variant="primary" size="lg" ariaLabel="Large"><ScanLine /></IconButton>
        <IconButton {...args} variant="secondary" size="md" ariaLabel="Medium"><ScanLine /></IconButton>
        <IconButton {...args} variant="tertiary" size="sm" ariaLabel="Small"><ScanLine /></IconButton>
        <IconButton {...args} variant="ghost" size="xs" ariaLabel="X-Small"><ScanLine /></IconButton>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <IconButton {...args} variant="primary" mode="destructive" ariaLabel="Delete Primary"><ScanLine /></IconButton>
        <IconButton {...args} variant="secondary" mode="destructive" ariaLabel="Delete Secondary"><ScanLine /></IconButton>
        <IconButton {...args} variant="tertiary" mode="destructive" ariaLabel="Delete Tertiary"><ScanLine /></IconButton>
        <IconButton {...args} variant="ghost" mode="destructive" ariaLabel="Delete Ghost"><ScanLine /></IconButton>
      </div>
    </>
  ),
};
