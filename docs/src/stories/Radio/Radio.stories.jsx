import React, { useState, useEffect } from 'react';
import { Radio } from '@bfinance/ui';

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    caption: { control: 'text' },
  },
};

const Controlled = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  // Keep local state in sync when the Controls panel changes `checked` —
  // useState's initial value only applies on mount, so without this the
  // Storybook toggle would do nothing after the first render.
  useEffect(() => {
    setChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <Radio
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = {
  render: Controlled,
  args: {
    size: 'md',
    checked: false,
  },
};

export const Checked = {
  render: Controlled,
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Disabled = {
  render: Controlled,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledChecked = {
  render: Controlled,
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
  },
};

export const SizeSm = {
  render: Controlled,
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const WithLabel = {
  render: Controlled,
  args: {
    ...Default.args,
    label: 'Label',
    caption: 'Caption text',
  },
};

const STATES = [
  { stateName: 'Default', extra: {} },
  { stateName: 'Hovered', extra: { 'data-visual-state': 'hover' } },
  { stateName: 'Focused', extra: { 'data-visual-state': 'focus' } },
  { stateName: 'Disabled', extra: { disabled: true } },
];

const StateRow = ({ stateName, ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontSize: 12, color: '#888' }}>{stateName}</span>
    <Controlled {...args} />
  </div>
);

const ActiveGroup = ({ title, baseArgs }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 500, fontSize: 14, color: '#555' }}>{title}</span>
    <div style={{ display: 'flex', gap: 32 }}>
      {STATES.map((state) => (
        <StateRow key={state.stateName} stateName={state.stateName} {...baseArgs} {...state.extra} />
      ))}
    </div>
  </div>
);

const SizeSection = ({ title, size, withLabel = false }) => {
  const labelArgs = withLabel ? { label: 'Checkbox label', caption: 'Caption' } : {};
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 16 }}>{title}</span>
      <ActiveGroup title="Active: False" baseArgs={{ size, checked: false, ...labelArgs }} />
      <ActiveGroup title="Active: True" baseArgs={{ size, checked: true, ...labelArgs }} />
    </div>
  );
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <SizeSection title="Radio — Size: sm" size="sm" />
      <SizeSection title="Radio — Size: md" size="md" />
      <SizeSection title="Radio label — Size: sm" size="sm" withLabel />
      <SizeSection title="Radio label — Size: md" size="md" withLabel />
    </div>
  ),
};
