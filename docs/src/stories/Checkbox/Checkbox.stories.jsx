import React from 'react';
import { Checkbox } from '@bfinance/ui';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    isChecked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    caption: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => (
  <div style={{ padding: 20 }}>
    <Checkbox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  isChecked: false,
  indeterminate: false,
  label: '',
  caption: '',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  size: 'md',
  isChecked: true,
  label: 'Accept terms and conditions',
  disabled: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 'md',
  isChecked: true,
  indeterminate: true,
  label: 'Select all',
  caption: 'Some items are selected',
  disabled: false,
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 24, padding: 20 }}>
    <Checkbox size="sm" isChecked={false} label="Small" />
    <Checkbox size="md" isChecked={true} label="Medium" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 24, padding: 20 }}>
    <Checkbox size="md" label="Unchecked disabled" disabled />
    <Checkbox size="md" isChecked label="Checked disabled" disabled />
    <Checkbox size="md" isChecked indeterminate label="Indeterminate disabled" disabled />
  </div>
);
