import { Dropdown } from '@bf/bfinance-ui';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    options: { control: 'object' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    lineHeight: { control: 'text' },
    menuWidth: { control: 'text' },
    customTextStyles: { control: 'object' },
    customIconStyles: { control: 'object' },
    icon: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    menuWidth: '200px',
    customTextStyles: {},
    customIconStyles: {},
  },
};

