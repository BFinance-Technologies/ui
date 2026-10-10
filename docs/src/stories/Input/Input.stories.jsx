import React, { useState, useRef } from 'react';
import { Input } from '@bfinance/ui';
import { SearchLine, BuildingLine, InformationLine } from '@bfinance/icons';
import FlagUk from '../../assets/icons/flag-uk.svg';
import GlobeLead from '../../assets/icons/globe-lead.svg';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'external', 'button', 'search', 'code', 'chip'] },
    size: { control: 'select', options: ['md', 'xs'] },
    mode: { control: 'select', options: ['default', 'destructive'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    showOptionalText: { control: 'boolean' },
  },
};

const CURRENCIES = [
  { label: 'EUR', value: 'EUR' },
  { label: 'USD', value: 'USD' },
  { label: 'GBP', value: 'GBP' },
];

const COUNTRIES = [
  { label: 'UK', value: 'UK' },
  { label: 'US', value: 'US' },
  { label: 'DE', value: 'DE' },
];

const Controlled = (args) => {
  const [value, setValue] = useState(args.value ?? '');
  const [country, setCountry] = useState(args.leadDropdownValue ?? 'UK');
  const [currency, setCurrency] = useState(args.tailDropdownValue ?? 'EUR');
  const [chips, setChips] = useState(args.chips ?? []);

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      leadDropdownValue={country}
      onLeadDropdownChange={setCountry}
      tailDropdownValue={currency}
      onTailDropdownChange={setCurrency}
      chips={chips}
      onRemoveChip={(chip, index) => setChips((prev) => prev.filter((_, i) => i !== index))}
      onAddChip={(chipValue) => {
        setChips((prev) => [...prev, chipValue]);
        setValue('');
      }}
    />
  );
};

export const Default = {
  render: Controlled,
  args: {
    type: 'default',
    size: 'md',
    label: 'Label',
    required: true,
    tooltipText: 'Helpful information about this field',
    placeholder: 'Placeholder',
    flag: <img src={FlagUk} alt="UK" />,
    leadDropdownOptions: COUNTRIES,
    leadIcon: <img src={GlobeLead} alt="" />,
    leadIconTooltip: 'This field supports international transfers',
    tailIcon: <InformationLine />,
    tailIconTooltip: 'Currency conversion rates update daily',
    tailDropdownOptions: CURRENCIES,
    helperText: 'Helper text',
  },
};

export const Filled = {
  render: Controlled,
  args: {
    ...Default.args,
    value: '1,250.00',
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
  },
};

export const WithButton = {
  render: Controlled,
  args: {
    ...Default.args,
    type: 'button',
    buttonLabel: 'Send',
  },
};

export const External = {
  render: Controlled,
  args: {
    label: 'Label',
    type: 'external',
    externalIcon: <BuildingLine />,
    externalLabel: 'Company',
    placeholder: 'Placeholder',
    leadIcon: <img src={GlobeLead} alt="" />,
    tailIcon: <InformationLine />,
    tailIconTooltip: 'Currency conversion rates update daily',
    tailDropdownOptions: CURRENCIES,
    helperText: 'Helper text',
  },
};

export const SizeXs = {
  render: Controlled,
  args: {
    ...Default.args,
    size: 'xs',
  },
};

export const Search = {
  render: Controlled,
  args: {
    type: 'search',
    leadIcon: <SearchLine />,
    leadDropdownValue: '',
    placeholder: 'Placeholder',
    badge: '⌘K',
    tailIcon: <InformationLine />,
    tailIconTooltip: 'Use ⌘K to open search from anywhere',
    tailDropdownValue: '',
  },
};

export const SearchFilled = {
  render: Controlled,
  args: {
    ...Search.args,
    value: 'Placeholder',
  },
};

export const SearchDisabled = {
  render: Controlled,
  args: {
    ...Search.args,
    disabled: true,
  },
};

export const Code = {
  render: Controlled,
  args: {
    type: 'code',
  },
};

export const CodeHovered = {
  render: Controlled,
  args: {
    ...Code.args,
    'data-visual-state': 'hover',
  },
};

export const CodeFocused = {
  render: Controlled,
  args: {
    ...Code.args,
    'data-visual-state': 'focus',
  },
};

export const CodeFilled = {
  render: Controlled,
  args: {
    ...Code.args,
    value: '0',
  },
};

export const CodeFailed = {
  render: Controlled,
  args: {
    ...Code.args,
    mode: 'destructive',
    value: '0',
  },
};

export const CodeRow = {
  render: () => {
    const [values, setValues] = useState(['', '', '', '', '', '']);
    const refs = useRef([]);

    const handleChange = (i) => (e) => {
      const digit = e.target.value.slice(-1);
      const next = [...values];
      next[i] = digit;
      setValues(next);
      if (digit && i < refs.current.length - 1) {
        refs.current[i + 1]?.focus();
      }
    };

    const handleKeyDown = (i) => (e) => {
      if (e.key === 'Backspace' && !values[i] && i > 0) {
        refs.current[i - 1]?.focus();
      }
    };

    return (
      <div style={{ display: 'flex', gap: 12 }}>
        {values.map((v, i) => (
          <Input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            type="code"
            value={v}
            onChange={handleChange(i)}
            onKeyDown={handleKeyDown(i)}
          />
        ))}
      </div>
    );
  },
};

export const Chip = {
  render: Controlled,
  args: {
    ...Default.args,
    type: 'chip',
    chips: ['192.0.2.1'],
    badge: '⌘K',
  },
};

export const ChipDestructive = {
  render: Controlled,
  args: {
    ...Chip.args,
    mode: 'destructive',
    helperText: 'This field is required',
  },
};

export const ChipFilled = {
  render: Controlled,
  args: {
    ...Chip.args,
    value: 'Filled text',
  },
};

export const ChipDisabled = {
  render: Controlled,
  args: {
    ...Chip.args,
    disabled: true,
  },
};

const STATES = [
  { stateName: 'Default', extra: {} },
  { stateName: 'Hovered', extra: { 'data-visual-state': 'hover' } },
  { stateName: 'Focused', extra: { 'data-visual-state': 'focus' } },
  { stateName: 'Filled', extra: { value: '1,250.00' } },
  { stateName: 'Disabled', extra: { disabled: true } },
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

const ModeGroup = ({ modeName, baseArgs }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 500, fontSize: 14, color: '#555' }}>{modeName}</span>
    {STATES.map((state) => (
      <StateRow key={state.stateName} stateName={state.stateName} {...baseArgs} {...state.extra} />
    ))}
  </div>
);

const TypeSection = ({ title, baseArgs }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 16 }}>{title}</span>
    {MODES.map((mode) => (
      <ModeGroup key={mode.modeName} modeName={mode.modeName} baseArgs={{ ...baseArgs, ...mode.extra }} />
    ))}
  </div>
);

const SEARCH_STATES = [
  { stateName: 'Default', extra: {} },
  { stateName: 'Filled', extra: { value: 'Placeholder' } },
  { stateName: 'Disabled', extra: { disabled: true } },
];

const SearchSection = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 16 }}>Type: Search</span>
    {SEARCH_STATES.map((state) => (
      <StateRow key={state.stateName} stateName={state.stateName} {...Search.args} {...state.extra} />
    ))}
  </div>
);

const CodeSection = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <span style={{ fontFamily: 'var(--font-Inter)', fontWeight: 600, fontSize: 16 }}>Type: Code</span>
    <div style={{ display: 'flex', gap: 24 }}>
      <StateRow stateName="Empty" {...Code.args} />
      <StateRow stateName="Hovered" {...Code.args} data-visual-state="hover" />
      <StateRow stateName="Active" {...Code.args} data-visual-state="focus" />
      <StateRow stateName="Filled" {...CodeFilled.args} />
      <StateRow stateName="Failed" {...CodeFailed.args} />
    </div>
  </div>
);

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: 400 }}>
      <TypeSection title="Type: Default" baseArgs={Default.args} />
      <TypeSection title="Type: External" baseArgs={External.args} />
      <TypeSection title="Type: Button" baseArgs={WithButton.args} />
      <SearchSection />
      <CodeSection />
      <TypeSection title="Type: Chip" baseArgs={Chip.args} />
    </div>
  ),
};
