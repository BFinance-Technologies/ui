import React from 'react';
import { Breadcrumbs } from '@bfinance/ui';
import { HomeLine, StarLine } from '@bfinance/icons';

const ITEMS = [
  { label: 'Label', href: '#' },
  { label: 'Label', href: '#' },
  { label: 'Label', href: '#' },
  { label: 'Label', href: '#' },
  { label: 'Label' },
];

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    divider: { control: 'select', options: ['icon', 'slash'] },
  },
  args: {
    items: ITEMS,
    size: 'sm',
    divider: 'icon',
  },
};

export const Default = {};

export const SizeMd = {
  args: {
    size: 'md',
  },
};

export const DividerSlash = {
  args: {
    divider: 'slash',
  },
};

export const SizeMdDividerSlash = {
  args: {
    size: 'md',
    divider: 'slash',
  },
};

export const TwoItems = {
  args: {
    items: [{ label: 'Label', href: '#' }, { label: 'Label' }],
  },
};

export const CustomIcon = {
  args: {
    icon: <HomeLine />,
  },
};

export const CustomIconPerItem = {
  args: {
    items: [
      { label: 'Home', href: '#', icon: <HomeLine /> },
      { label: 'Label', href: '#' },
      { label: 'Favorites', href: '#', icon: <StarLine /> },
      { label: 'Label' },
    ],
  },
};

export const NoIcons = {
  args: {
    icon: null,
  },
};

export const WithMore = {
  args: {
    items: [
      { label: 'Label', href: '#' },
      { more: true, onClick: () => {} },
      { label: 'Label', href: '#' },
      { label: 'Label' },
    ],
  },
};

const VariantRow = ({ title, size, divider }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 14 }}>{title}</span>
    <Breadcrumbs items={ITEMS} size={size} divider={divider} />
  </div>
);

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <VariantRow title="Size: sm — Divider: Icon" size="sm" divider="icon" />
      <VariantRow title="Size: sm — Divider: Slash" size="sm" divider="slash" />
      <VariantRow title="Size: md — Divider: Icon" size="md" divider="icon" />
      <VariantRow title="Size: md — Divider: Slash" size="md" divider="slash" />
    </div>
  ),
};

export const HoverState = {
  name: 'Hover state (hover an item to see it)',
  args: {
    items: [
      { label: 'Hover me', href: '#' },
      { label: 'Label', href: '#' },
      { label: 'Label' },
    ],
  },
};
