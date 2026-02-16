import React, { useState } from 'react';
import { Checkbox } from '@bf/bfinance-ui';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const Interactive = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(!!args.checked);

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <label style={{ display: 'inline-flex', gap: 8, alignItems: 'center', cursor: args.disabled ? 'not-allowed' : 'pointer' }}>
          <Checkbox
            {...args}
            checked={isChecked}
            onChange={(e) => {
              const next = e?.target ? e.target.checked : !isChecked;
              setIsChecked(next);
              if (args.onChange) args.onChange(e);
            }}
          />
        </label>
      </div>
    );
  },
  args: {
    checked: false,
    disabled: false,
  },
};

