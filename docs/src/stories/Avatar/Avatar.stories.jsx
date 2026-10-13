import React from 'react';
import { Avatar } from '@bfinance/ui';
import userIcon from '../../assets/icons/userIcon.png';

const PHOTO = userIcon;
const TYPES = ['initials', 'userpic', 'icon', 'empty'];
const COLORS = ['grey', 'blue', 'green', 'orange', 'red', 'purple'];
const THEMES = ['subtle', 'accent'];
const SIZES = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: TYPES },
    color: { control: 'select', options: COLORS },
    theme: { control: 'select', options: THEMES },
    size: { control: 'select', options: SIZES },
    initials: { control: 'text', if: { arg: 'type', eq: 'initials' } },
    src: { control: 'text', if: { arg: 'type', eq: 'userpic' } },
    alt: { control: 'text' },
    status: { control: 'boolean' },
    notification: { control: 'boolean' },
  },
};

const Row = ({ children, style }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', ...style }}>
    {children}
  </div>
);

export const Default = {
  args: {
    type: 'initials',
    color: 'green',
    theme: 'accent',
    size: '2xl',
    initials: 'B',
    src: PHOTO,
    status: true,
    notification: true,
  },
};

export const Types = {
  render: (args) => (
    <Row>
      {TYPES.map((type) => (
        <Avatar key={type} {...args} type={type} src={PHOTO} initials="B" />
      ))}
    </Row>
  ),
  args: { size: 'lg' },
};

export const Colors = {
  render: (args) => (
    <>
      {THEMES.map((theme, i) => (
        <Row key={theme} style={{ marginTop: i ? 20 : 0 }}>
          {COLORS.map((color) => (
            <Avatar key={color} {...args} type="initials" initials="B" color={color} theme={theme} />
          ))}
        </Row>
      ))}
    </>
  ),
  args: { size: 'lg' },
};

export const Sizes = {
  render: (args) => (
    <>
      {TYPES.map((type, i) => (
        <Row key={type} style={{ marginTop: i ? 20 : 0 }}>
          {SIZES.map((size) => (
            <Avatar key={size} {...args} type={type} size={size} src={PHOTO} initials="B" />
          ))}
        </Row>
      ))}
    </>
  ),
  args: { color: 'blue', theme: 'subtle' },
};

export const Indicators = {
  render: (args) => (
    <Row>
      {SIZES.map((size) => (
        <Avatar key={size} {...args} size={size} />
      ))}
    </Row>
  ),
  args: {
    type: 'userpic',
    src: PHOTO,
    status: true,
    notification: true,
  },
};
