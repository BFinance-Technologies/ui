import React from 'react';
import { Toggle } from '@bf/bfinance-ui';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    isActive: { control: 'boolean' },
    label: { control: 'text' },
    caption: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => (
  <div style={{ padding: 20 }}>
    <Toggle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  isActive: false,
  label: '',
  caption: '',
  disabled: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: 'md',
  isActive: true,
  label: 'Notifications',
  caption: 'Receive app updates',
  disabled: false,
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 24, padding: 20 }}>
    <Toggle size="sm" isActive={false} label="Small" />
    <Toggle size="md" isActive={true} label="Medium" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 24, padding: 20 }}>
    <Toggle size="sm" isActive={false} label="Small" disabled />
    <Toggle size="md" isActive={true} label="Medium" disabled />
  </div>
);

