import React, { useState } from 'react';
import { SelectInput } from '@bfinance/ui';
import { SearchLine, InformationLine } from '@bfinance/icons';
import UserLeadIcon from '../../assets/icons/user-lead.svg';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'multi-select', 'avatar'] },
    size: { control: 'select', options: ['md', 'sm'] },
    mode: { control: 'select', options: ['default', 'destructive'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    showOptionalText: { control: 'boolean' },
  },
};

const PEOPLE = [
  { value: 'anna', label: 'Anna Green', supportText: '@anna_green', avatar: 'https://i.pravatar.cc/40?img=5' },
  { value: 'baha', label: 'Baha Sattarov', supportText: '@baha', avatar: 'https://i.pravatar.cc/40?img=12' },
  { value: 'george', label: 'George Jones', supportText: '@george', avatar: 'https://i.pravatar.cc/40?img=15' },
  { value: 'noah', label: 'Noah Smith', supportText: '@noah', avatar: 'https://i.pravatar.cc/40?img=33' },
  { value: 'james', label: 'James Mark', supportText: '@james.m', avatar: 'https://i.pravatar.cc/40?img=52' },
  { value: 'oliver', label: 'Oliver Taylor', supportText: '@otaylor', avatar: 'https://i.pravatar.cc/40?img=60', tag: { label: 'Remote', color: 'red' } },
  { value: 'sarah', label: 'Sarah Walker', supportText: '@sarah', avatar: 'https://i.pravatar.cc/40?img=47' },
];

const TAGS = [
  { value: 'baha', label: 'Baha Sattarov', chipLabel: 'Baha', supportText: '@baha', avatar: 'https://i.pravatar.cc/40?img=12', tag: { color: 'blue' } },
  { value: 'george', label: 'George Jones', chipLabel: 'George', supportText: '@support', avatar: 'https://i.pravatar.cc/40?img=15', tag: { color: 'red' } },
  { value: 'oliver', label: 'Oliver Taylor', chipLabel: 'Oliver', supportText: '@otaylor', avatar: 'https://i.pravatar.cc/40?img=60', tag: { color: 'purple', label: 'Remote' } },
  { value: 'noah', label: 'Noah Smith', chipLabel: 'Noah', supportText: '@noah', avatar: 'https://i.pravatar.cc/40?img=33' },
  { value: 'james', label: 'James Mark', chipLabel: 'James', supportText: '@james.m', avatar: 'https://i.pravatar.cc/40?img=52' },
  { value: 'sarah', label: 'Sarah Walker', chipLabel: 'Sarah', supportText: '@sarah', avatar: 'https://i.pravatar.cc/40?img=47', tag: { color: 'orange' } },
];

const Controlled = (args) => {
  const [value, setValue] = useState(args.value ?? (args.type === 'multi-select' ? [] : ''));

  return (
    <div style={{ width: 400 }}>
      <SelectInput
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Default = {
  render: Controlled,
  args: {
    type: 'default',
    size: 'md',
    label: 'Label',
    required: true,
    placeholder: 'Select...',
    options: PEOPLE,
    leadIcon: <img src={UserLeadIcon} alt="" />,
    badge: '⌘K',
    tailIcon: <InformationLine />,
    tailIconTooltip: 'You can search by name',
    helperText: 'Helper text',
  },
};

export const Filled = {
  render: Controlled,
  args: {
    ...Default.args,
    value: 'baha',
  },
};

export const Destructive = {
  render: Controlled,
  args: {
    ...Default.args,
    mode: 'destructive',
    helperText: 'This field is required',
  },
};

export const Disabled = {
  render: Controlled,
  args: {
    ...Default.args,
    disabled: true,
    value: 'baha',
  },
};

export const SizeSm = {
  render: Controlled,
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Avatar = {
  render: Controlled,
  args: {
    ...Default.args,
    type: 'avatar',
  },
};

export const AvatarFilled = {
  render: Controlled,
  args: {
    ...Avatar.args,
    value: 'baha',
  },
};

export const MultiSelect = {
  render: Controlled,
  args: {
    type: 'multi-select',
    size: 'md',
    label: 'Label',
    placeholder: 'Select...',
    options: TAGS,
    leadIcon: <SearchLine />,
    badge: '⌘K',
    tailIcon: <InformationLine />,
    tailIconTooltip: 'You can select multiple people',
    helperText: 'Helper text',
  },
};

export const MultiSelectFilled = {
  render: Controlled,
  args: {
    ...MultiSelect.args,
    value: ['baha', 'george', 'oliver', 'noah', 'sarah'],
  },
};

export const MultiSelectDisabled = {
  render: Controlled,
  args: {
    ...MultiSelect.args,
    value: ['baha', 'george'],
    disabled: true,
  },
};

const STATES = (filledValue) => [
  { stateName: 'Default', extra: {} },
  { stateName: 'Hovered', extra: { 'data-visual-state': 'hover' } },
  { stateName: 'Focused', extra: { 'data-visual-state': 'focus' } },
  { stateName: 'Filled', extra: { value: filledValue } },
  { stateName: 'Disabled', extra: { disabled: true, value: filledValue } },
];

const StateRow = ({ stateName, ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontSize: 12, color: '#888' }}>{stateName}</span>
    <Controlled {...args} />
  </div>
);

const MODES = [
  { modeName: 'Target: Default', extra: {} },
  { modeName: 'Target: Destructive', extra: { mode: 'destructive', helperText: 'This field is required' } },
];

const ModeGroup = ({ modeName, baseArgs, filledValue }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 500, fontSize: 14, color: '#555' }}>{modeName}</span>
    {STATES(filledValue).map((state) => (
      <StateRow key={state.stateName} stateName={state.stateName} {...baseArgs} {...state.extra} />
    ))}
  </div>
);

const TypeSection = ({ title, baseArgs, filledValue }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 16 }}>{title}</span>
    {MODES.map((mode) => (
      <ModeGroup key={mode.modeName} modeName={mode.modeName} baseArgs={{ ...baseArgs, ...mode.extra }} filledValue={filledValue} />
    ))}
  </div>
);

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: 400 }}>
      <TypeSection title="Type: Default" baseArgs={Default.args} filledValue="baha" />
      <TypeSection title="Type: Avatar" baseArgs={Avatar.args} filledValue="baha" />
      <TypeSection title="Type: Multi-select" baseArgs={MultiSelect.args} filledValue={['baha', 'george', 'oliver', 'noah', 'sarah']} />
    </div>
  ),
};
