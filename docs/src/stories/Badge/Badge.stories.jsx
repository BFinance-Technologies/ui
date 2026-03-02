import React from 'react';
import { Badge } from '@bf/bfinance-ui';
import { CheckboxCircleFill, Hashtag }   from '@bfinance/icons'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'blue', 'green', 'orange', 'red', 'purple', 'white'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    color: 'gray',
    size: 'md',
    shape: 'rounded',
    children: 'Badge',
  },
};

export const Gray = {
  args: {
    color: 'gray',
    shape: 'rounded',
  },

 render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
}

export const Blue = {
  args: {
    color: 'blue',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const Green = {
  args: {
    color: 'green',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const Orange = {
  args: {
    color: 'orange',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const Red = {
  args: {
    color: 'red',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const Purple = {
  args: {
    color: 'purple',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const White = {
  args: {
    color: 'white',
    shape: 'rounded',
  },

  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} {...args}>Badge</Badge>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20 }}>
        <Badge size="lg"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="md"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="sm"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
        <Badge size="xs"  leftIcon={<CheckboxCircleFill/> } rightIcon={<Hashtag/>} disabled {...args}>Badge</Badge>
      </div>
    </>
  ),
};

export const Pill = {
  args: {
    color: 'blue',
    size: 'lg',
    shape: 'pill',
    children: 'Badge',
    leftIcon: <CheckboxCircleFill/>,
    rightIcon: <Hashtag/>,
  },
};

export const Disabled = {
  args: {
    color: 'blue',
    size: 'lg',
    shape: 'rounded',
    disabled: true,
    children: 'Disabled',
    leftIcon: <CheckboxCircleFill/>,
    rightIcon: <Hashtag/>,
  },
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Badge size="lg" color="gray">Badge lg</Badge>
    <Badge size="md" color="gray">Badge Medium</Badge>
    <Badge size="sm" color="gray">Badge Small</Badge>
    <Badge size="xs" color="gray">Badge X-Small</Badge>
  </div>
);