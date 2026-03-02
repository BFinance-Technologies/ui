import React from 'react';
import { Button, Badge } from "@bf/bfinance-ui";

import  { ScanLine, ArrowRightLine}   from '@bfinance/icons'

export default {
  title: 'Components/Button',
  component: Button,
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
  },
};

export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
  },

  render: (args) => (
    <Button {...args} size="md" label="Button" leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>}>
      <Badge size="md" color="white">16</Badge>
    </Button>
  ),
};

export const Secondary = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Tertiary = {
  args: {
    label: 'Tertiary',
    variant: 'tertiary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Ghost = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
    size: 'md',
    shape: 'rounded',
  },
};

export const PrimaryDestructive = {
  args: {
    label: 'Delete',
    variant: 'primary',
    mode: 'destructive',
    size: 'md',
  },
};

export const SecondaryDestructive = {
  args: {
    label: 'Delete',
    variant: 'secondary',
    mode: 'destructive',
    size: 'md',
  },
};

export const TertiaryDestructive = {
  args: {
    label: 'Delete',
    variant: 'tertiary',
    mode: 'destructive',
    size: 'md',
  },
};

export const GhostDestructive = {
  args: {
    label: 'Delete',
    variant: 'ghost',
    mode: 'destructive',
    size: 'md',
  },
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="lg" label="Large" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="xs" label="X-Small" />
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} shape="rounded" label="Button Rounded" />
      <Button {...args} shape="pill" label="Button Pill" />
    </div>
  ),
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const WithIcons = {
  render: (args) => {
    return (
      <>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant="primary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="lg" label="With icons" />
          <Button variant="secondary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="md" label="With icons" />
          <Button variant="tertiary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="sm" label="With icons" />
          <Button variant="ghost" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="xs" label="With icons" />
        </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
          <Button variant="primary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="lg" label="With icons" />
          <Button variant="secondary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="md" label="With icons" />
          <Button variant="tertiary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="sm" label="With icons" />
          <Button variant="ghost" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="xs" label="With icons" />
        </div>
      </>
    )
  }
};

export const Disabled = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  render: (args) => (
    <> 
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="primary" {...args} size="lg" label="Large" />
        <Button variant="secondary" {...args} size="md" label="Medium" />
        <Button variant="tertiary" {...args} size="sm" label="Small" />
        <Button variant="ghost" {...args} size="xs" label="X-Small" />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Button variant="primary" mode="destructive" {...args} label="Disabled" />
        <Button variant="secondary" mode="destructive" {...args} label="Disabled" />
        <Button variant="tertiary" mode="destructive" {...args} label="Disabled" />
        <Button variant="ghost" mode="destructive" {...args} label="Disabled" />
      </div>
    </>
  ),
};