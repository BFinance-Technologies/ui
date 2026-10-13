import React from 'react';
import { TabMenu } from '@bfinance/ui';
import { ScanLine, ArrowRightLine } from '@bfinance/icons';

export default {
  title: 'Components/TabMenu',
  component: TabMenu,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['fill', 'segmented', 'line'],
    },
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
  { value: 'all', label: 'Label' },
  { value: 'active', label: 'Label', badge: { value: 12 } },
  { value: 'closed', label: 'Label' },
  { value: 'archived', label: 'Label', badge: { value: 8 } },
  { value: 'draft', label: 'Label' },
];

export const Default = {
  args: {
    items: defaultItems,
    type: 'line',
    size: 'md',
    shape: 'rounded',
    defaultValue: 'active',
  },
};

export const Types = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexDirection: 'column' }}>
      <TabMenu {...args} type="fill" items={defaultItems} defaultValue="active" />
      <TabMenu {...args} type="line" items={defaultItems} defaultValue="active" />
      <div style={{ width: '510px' }}>
        <TabMenu {...args} type="segmented" items={defaultItems} defaultValue="active" />
      </div>
    </div>
  ),
  args: {
    size: 'md',
    shape: 'rounded',
  },
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexDirection: 'column' }}>
      {['fill', 'line', 'segmented'].map((type) => (
        <div key={type} style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'var(--font-Inter)', fontSize: '14px', fontWeight: 600, textTransform: 'capitalize' }}>{type}</div>
          {['lg', 'md', 'sm'].map((size) => (
            <div key={size} style={type === 'segmented' ? { width: '610px' } : undefined}>
              <TabMenu {...args} type={type} size={size} items={defaultItems} defaultValue="active" />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  args: {
    shape: 'rounded',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexDirection: 'column' }}>
      <TabMenu {...args} shape="rounded" items={defaultItems} defaultValue="active" />
      <TabMenu {...args} shape="pill" items={defaultItems} defaultValue="active" />
      <div style={{ width: '510px', display: 'flex', gap: '24px', flexDirection: 'column' }}>
        <TabMenu {...args} type="segmented" shape="rounded" items={defaultItems} defaultValue="active" />
        <TabMenu {...args} type="segmented" shape="pill" items={defaultItems} defaultValue="active" />
      </div>
    </div>
  ),
  args: {
    type: 'fill',
    size: 'md',
  },
};

export const Segmented = {
  render: (args) => (
    <div style={{ width: '510px' }}>
      <TabMenu {...args} items={defaultItems} defaultValue="active" />
    </div>
  ),
  args: {
    type: 'segmented',
    size: 'md',
    shape: 'rounded',
  },
};

export const WithIcons = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexDirection: 'column' }}>
      {['lg', 'md', 'sm'].map((size) => (
        <TabMenu
          key={size}
          {...args}
          size={size}
          items={[
            { value: 'all', label: 'Label', leadIcon: <ScanLine /> },
            { value: 'active', label: 'Label', leadIcon: <ScanLine />, tailIcon: <ArrowRightLine />, badge: { value: 12 } },
            { value: 'closed', label: 'Label', leadIcon: <ScanLine /> },
          ]}
          defaultValue="active"
        />
      ))}
    </div>
  ),
  args: {
    type: 'fill',
    shape: 'rounded',
  },
};

export const WithDisabled = {
  render: (args) => (
    <TabMenu
      {...args}
      items={[
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month', disabled: true },
      ]}
      defaultValue="day"
    />
  ),
  args: {
    type: 'fill',
    size: 'md',
    shape: 'rounded',
  },
};

export const PerItemOverrides = {
  render: (args) => (
    <TabMenu
      {...args}
      items={[
        { value: 'all', label: 'Label', size: 'lg' },
        { value: 'active', label: 'Label', badge: { value: 12 } },
        { value: 'closed', label: 'Label', size: 'sm' },
      ]}
      defaultValue="active"
    />
  ),
  args: {
    type: 'fill',
    size: 'md',
    shape: 'rounded',
  },
};
