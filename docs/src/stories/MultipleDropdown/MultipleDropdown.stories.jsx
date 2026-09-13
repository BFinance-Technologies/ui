import React from 'react';
import { MultipleDropdown } from '@bfinance/ui';

const OPTIONS = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

export default {
  title: 'Components/MultipleDropdown',
  component: MultipleDropdown,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    options: { control: 'object' },
    position: { control: { type: 'select', options: ['down', 'up'] } },
    width: { control: 'text' },
    menuWidth: { control: 'text' },
    onSelect: { action: 'onSelect' },
    onOpen: { action: 'onOpen' },
  },
};

export const Default = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'flex-start' }}>
      <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.1px' }}>Down</span>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: '160px' }}>
        <MultipleDropdown {...args} position="down" />
      </div>
      <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.1px' }}>Up</span>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <MultipleDropdown {...args} position="up" />
      </div>
    </div>
  ),
  args: {
    title: 'Select',
    options: OPTIONS,
    width: '200px',
  },
};



