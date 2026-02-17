import React from 'react';
import { Dropdown } from '@bf/bfinance-ui';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    options: { control: 'object' },
    icon: { control: 'text' },
    position: { control: { type: 'select', options: ['downLeft', 'downRight', 'upLeft', 'upRight'] } },
  },
};

export const Default = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <span>Down</span>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' , marginBottom: '100px'}}>
          <Dropdown {...args} position='downLeft' defaultOpen />
          <Dropdown {...args} position='downRight' defaultOpen />
        </div>
        <span>Up</span>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Dropdown {...args} position='upLeft' defaultOpen />
          <Dropdown {...args} position='upRight' defaultOpen />
        </div></div>
  ),
  args: {
    title: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    menuWidth: '150px',
    width: '200px',
  },
};

