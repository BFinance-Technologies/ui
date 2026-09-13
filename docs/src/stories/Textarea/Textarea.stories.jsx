import React from 'react';

import { Textarea } from '@bfinance/ui';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    optionalText: { control: 'text' },
    tooltipText: { control: 'text' },
    submitText: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    required: false,
    disabled: false,
  },
};

export const WithHelperText = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    helperText: 'Helper text',
  },
};

export const WithOptionalText = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    optionalText: '(optional)',
    placeholder: 'Something about transaction',
  },
};

export const Required = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    required: true,
  },
};

export const WithTooltip = {
  render: (args) => {
    return (
      <div style={{ margin: '20px 25px' }}>
        <Textarea {...args}  />
      </div>
    )
  }, 
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    tooltipText: 'Helpful tooltip information',
  },
};

export const WithSubmitButton = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    submitText: 'Submit',
  },
};

export const Full = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    helperText: 'Helper text',
    optionalText: '(optional)',
    tooltipText: 'Helpful tooltip information',
    submitText: 'Submit',
    required: false,
    disabled: false,
  },
};

export const Disabled = {
  render: (args) => (
    <div style={{ margin: '20px 25px' }}>
      <Textarea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: 'Something about transaction',
    helperText: 'Helper text',
    submitText: 'Submit',
    disabled: true,
  },
};

