import React from 'react';
import { ButtonGroup } from '@bf/bfinance-ui';
import { ScanLine, ArrowRightLine, TimeLine } from '@bfinance/icons';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
    },
  },
};

const defaultItems = [
  { label: 'Button', leftIcon: <ScanLine />, rightIcon: <ArrowRightLine />, badge: { value: 16 } },
  { label: 'Button', leftIcon: <ScanLine /> },
  { label: 'Button', leftIcon: <ScanLine /> },
];

export const Default = {
  args: {
    items: defaultItems,
    size: 'md',
    shape: 'rounded',
  },
};

export const Sizes = {
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: 'column'}}>
      <ButtonGroup {...args} size="lg" items={defaultItems} />
      <ButtonGroup {...args} size="md" items={defaultItems} />
      <ButtonGroup {...args} size="sm" items={defaultItems} />
    </div>
  ),
  args: {
    shape: 'rounded',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: 'column'}}>   
      <ButtonGroup {...args} shape="rounded" items={defaultItems} />
      <ButtonGroup {...args} shape="pill" items={defaultItems} />
    </div>
  ),
  args: {
    size: 'md',
  },
};

export const WithIcons = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { label: 'Button', leftIcon: <ScanLine /> },
        { label: 'Button', leftIcon: <ScanLine /> },
        { label: 'Button', leftIcon: <ScanLine /> },
      ]}
    />
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const WithBadge = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { label: 'All', badge: { value: 24 } },
        { label: 'Active', badge: { value: 15 } },
        { label: 'Closed', badge: { value: 16 } },
      ]}
    />
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const WithIconsAndBadge = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { label: 'Button', leftIcon: <ScanLine />, rightIcon: <ArrowRightLine />, badge: { value: 16 } },
        { label: 'Button', leftIcon: <ScanLine />, rightIcon: <ArrowRightLine />, badge: { value: 16 } },
        { label: 'Button', leftIcon: <ScanLine />, rightIcon: <ArrowRightLine />, badge: { value: 16 } },
      ]}
    />
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const WithDisabled = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { label: 'Day' },
        { label: 'Week' },
        { label: 'Month', disabled: true },
      ]}
    />
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const IconOnly = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { leftIcon: <ScanLine /> },
        { leftIcon: <ScanLine /> },
        { leftIcon: <ScanLine /> },
      ]}
    />
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};
