import React, { useState } from "react";

import { Input } from '@bf/bfinance-ui';
import SearchIcon from "../../assets/icons/search.svg"

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    disable: { control: 'boolean' },
    onIconClick: { action: 'icon clicked' },
   
    width: { control: 'text' },
    height: { control: 'text' },

    containerPadding : { control: 'text' },
    containerBorder: { control: 'text' },
    containerBorderRadius: { control: 'text' },
    containerBackground: { control: 'text' },
    containerGap: { control: 'text' },

    inputPadding: { control: 'text' },
    inputFontSize: { control: 'text' },
    inputFontWeight: { control: 'text' },
    inputFontFamily: { control: 'text' },
    inputLineHeight: { control: 'text' },
    inputLetterSpacing: { control: 'text' },
    inputColor: { control: 'color' },
    inputBackground: { control: 'text' },

    placeholderColor: { control: 'color' },
  },
};

export const Default = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },

  args: {
    placeholder: 'Enter text',
    value: '',
    type: 'text',
    disabled: false,
    width: '250px',
    height: '40px',
    containerPadding: '8px',
    containerBorder: '1px solid #ccc',
    containerBorderRadius: '12px',
    containerBackground: '#fff',
    containerGap: '8px',
    inputPadding: '8px',
    inputFontSize: '14px',
    inputFontWeight: '400',
    inputLineHeight: '20px',
    inputLetterSpacing: '0.5px',
    inputColor: '#333',
    inputBackground: '#fff',
    placeholderColor: '#999',
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Search = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        leftIcon={SearchIcon}
      />
    );
  },

  args: {
    placeholder: 'Enter text',
    value: '',
    type: 'text',
    disabled: false,
    width: '250px',
    height: '40px',
  },
};
