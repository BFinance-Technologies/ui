import { Button } from "@bf/bfinance-ui";

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'transparent'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Primary  = {
  args: {
    children: 'Primary button',
    variant: 'primary',
  }
};

export const Secondary = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  }
};

export const Tertiary = {
  args: {
    children: 'Tertiary button',
    variant: 'tertiary',
  }
};

export const Transparent = {
  args: {
    children: 'Transparent button',
    variant: 'transparent',
  }
};

export const Disabled = {
  args: {
    children: 'Disabled button',
    variant: 'primary',
    disabled: true,
  }
};

export const CustomStyles = {
  args: {
    children: 'Custom styled button',
    variant: 'primary',
    height: 50,
    width: 200,
    fontSize: 18,
    padding: '10px 20px',
    borderRadius: 12,
  }
};    