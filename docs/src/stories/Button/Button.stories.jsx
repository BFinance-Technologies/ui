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
    children: 'Primary',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
  },

  render: (args) => (
    <Button 
      {...args} 
      size="md" 
      leftIcon={<ScanLine/>} 
      rightIcon={<ArrowRightLine/>}
      badge={{value: 16}}
    >
      {args.children}
    </Button>
  ),
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Tertiary = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Ghost = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    size: 'md',
    shape: 'rounded',
  },
};

export const PrimaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'primary',
    mode: 'destructive',
    size: 'md',
  },
};

export const SecondaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'secondary',
    mode: 'destructive',
    size: 'md',
  },
};

export const TertiaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'tertiary',
    mode: 'destructive',
    size: 'md',
  },
};

export const GhostDestructive = {
  args: {
    children: 'Delete',
    variant: 'ghost',
    mode: 'destructive',
    size: 'md',
  },
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="xs">X-Small</Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} shape="rounded">Button Rounded</Button>
      <Button {...args} shape="pill">Button Pill</Button>
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
          <Button variant="primary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="lg">With icons</Button>
          <Button variant="secondary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="md">With icons</Button>
          <Button variant="tertiary" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="sm">With icons</Button>
          <Button variant="ghost" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="xs">With icons</Button>
        </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
          <Button variant="primary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="lg">With icons</Button>
          <Button variant="secondary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="md">With icons</Button>
          <Button variant="tertiary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="sm">With icons</Button>
          <Button variant="ghost" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} size="xs">With icons</Button>
        </div>
      </>
    )
  }
};

export const WithBadge = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <Button variant="primary" {...args}  leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} badge={args.badge}>With badge</Button>
        <Button variant="secondary" {...args} badge={args.badge}>With badge</Button>
        <Button variant="tertiary" {...args}  badge={args.badge}>With badge</Button>
        <Button variant="ghost" {...args}  badge={args.badge}>With badge</Button>  
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="primary" mode="destructive" {...args} leftIcon={<ScanLine/>} rightIcon={<ArrowRightLine/>} badge={args.badge}>With badge</Button>
        <Button variant="secondary" mode="destructive" {...args} badge={args.badge}>With badge</Button>
        <Button variant="tertiary" mode="destructive" {...args} badge={args.badge}>With badge</Button>
        <Button variant="ghost" mode="destructive" {...args} badge={args.badge}>With badge</Button>
      </div>
    </>
  ),
  args: {
    badge: { value: 16, leftIcon: <ScanLine/>, rightIcon: <ArrowRightLine/> },
  },
};

export const Disabled = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  render: (args) => (
    <> 
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="primary" {...args} size="lg">Large</Button>
        <Button variant="secondary" {...args} size="md">Medium</Button>
        <Button variant="tertiary" {...args} size="sm">Small</Button>
        <Button variant="ghost" {...args} size="xs">X-Small</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Button variant="primary" mode="destructive" {...args}>Disabled</Button>
        <Button variant="secondary" mode="destructive" {...args}>Disabled</Button>
        <Button variant="tertiary" mode="destructive" {...args}>Disabled</Button>
        <Button variant="ghost" mode="destructive" {...args}>Disabled</Button>
      </div>
    </>
  ),
};