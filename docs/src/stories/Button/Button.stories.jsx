import React from 'react';
import { Button, IconButton, LinkButton } from "@bf/bfinance-ui";

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    target: {
      control: 'select',
      options: ['default', 'destructive'],
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

export const Primary = {
  args: {
    children: 'Primary',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Tertiary = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Ghost = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    size: 'md',
    shape: 'rounded',
  },
};

export const PrimaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'primary',
    target: 'destructive',
    size: 'md',
  },
};

export const SecondaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'secondary',
    target: 'destructive',
    size: 'md',
  },
};

export const TertiaryDestructive = {
  args: {
    children: 'Delete',
    variant: 'tertiary',
    target: 'destructive',
    size: 'md',
  },
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="xs">X-Small</Button>
    </div>
  ),
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} shape="rounded">Button Rounded</Button>
      <Button {...args} shape="pill">Button Pill</Button>
    </div>
  ),
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const WithIcons = {
  render: (args) => {
    const LeftIcon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.72592 3.54753L11.1784 10L10.0001 11.1784L4.73342 5.91169C3.75191 7.1775 3.25895 8.75437 3.34472 10.3538C3.4305 11.9533 4.08927 13.4684 5.20051 14.622C6.31176 15.7755 7.8012 16.4905 9.39633 16.6359C10.9915 16.7814 12.5857 16.3477 13.8872 15.4142C15.1888 14.4807 16.1108 13.1097 16.4845 11.5522C16.8582 9.99463 16.6586 8.3546 15.9223 6.93213C15.186 5.50966 13.9621 4.39985 12.4746 3.80573C10.9871 3.21161 9.33544 3.1729 7.82175 3.69669L6.54175 2.41669C7.62724 1.92107 8.80681 1.66526 10.0001 1.66669C14.6026 1.66669 18.3334 5.39753 18.3334 10C18.3334 14.6025 14.6026 18.3334 10.0001 18.3334C5.39759 18.3334 1.66675 14.6025 1.66675 10C1.6655 8.76482 1.9394 7.54485 2.46855 6.42873C2.99771 5.31261 3.76884 4.32838 4.72592 3.54753Z" fill="white"/>
      </svg>
    )

    const RightIcon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4766 9.1664L9.00658 4.6964L10.1849 3.51807L16.6666 9.99973L10.1849 16.4814L9.00658 15.3031L13.4766 10.8331H3.33325V9.1664H13.4766Z" fill="white"/>
      </svg>
    )

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button {...args} leftIcon={LeftIcon} rightIcon={RightIcon}>With icons</Button>
      </div>
    )
  },
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const IconOnly = {
  render: (args) => {
    const Icon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.72592 3.54753L11.1784 10L10.0001 11.1784L4.73342 5.91169C3.75191 7.1775 3.25895 8.75437 3.34472 10.3538C3.4305 11.9533 4.08927 13.4684 5.20051 14.622C6.31176 15.7755 7.8012 16.4905 9.39633 16.6359C10.9915 16.7814 12.5857 16.3477 13.8872 15.4142C15.1888 14.4807 16.1108 13.1097 16.4845 11.5522C16.8582 9.99463 16.6586 8.3546 15.9223 6.93213C15.186 5.50966 13.9621 4.39985 12.4746 3.80573C10.9871 3.21161 9.33544 3.1729 7.82175 3.69669L6.54175 2.41669C7.62724 1.92107 8.80681 1.66526 10.0001 1.66669C14.6026 1.66669 18.3334 5.39753 18.3334 10C18.3334 14.6025 14.6026 18.3334 10.0001 18.3334C5.39759 18.3334 1.66675 14.6025 1.66675 10C1.6655 8.76482 1.9394 7.54485 2.46855 6.42873C2.99771 5.31261 3.76884 4.32838 4.72592 3.54753Z" fill="white"/>
      </svg>
    )

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <IconButton {...args} icon={Icon} size="lg" />
        <IconButton {...args} icon={Icon} size="md" />
        <IconButton {...args} icon={Icon} size="sm" />
        <IconButton {...args} icon={Icon} size="xs" />
      </div>
    )
  },
  args: {
    variant: 'ghost',
    shape: 'rounded',
  },
};

export const LinkButtons = {
  render: (args) => {
    const LeftIcon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.72592 3.54753L11.1784 10L10.0001 11.1784L4.73342 5.91169C3.75191 7.1775 3.25895 8.75437 3.34472 10.3538C3.4305 11.9533 4.08927 13.4684 5.20051 14.622C6.31176 15.7755 7.8012 16.4905 9.39633 16.6359C10.9915 16.7814 12.5857 16.3477 13.8872 15.4142C15.1888 14.4807 16.1108 13.1097 16.4845 11.5522C16.8582 9.99463 16.6586 8.3546 15.9223 6.93213C15.186 5.50966 13.9621 4.39985 12.4746 3.80573C10.9871 3.21161 9.33544 3.1729 7.82175 3.69669L6.54175 2.41669C7.62724 1.92107 8.80681 1.66526 10.0001 1.66669C14.6026 1.66669 18.3334 5.39753 18.3334 10C18.3334 14.6025 14.6026 18.3334 10.0001 18.3334C5.39759 18.3334 1.66675 14.6025 1.66675 10C1.6655 8.76482 1.9394 7.54485 2.46855 6.42873C2.99771 5.31261 3.76884 4.32838 4.72592 3.54753Z" fill="white"/>
      </svg>
    )

    const RightIcon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4766 9.1664L9.00658 4.6964L10.1849 3.51807L16.6666 9.99973L10.1849 16.4814L9.00658 15.3031L13.4766 10.8331H3.33325V9.1664H13.4766Z" fill="white"/>
      </svg>
    )

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <LinkButton {...args} href="https://example.com" leftIcon={LeftIcon} rightIcon={RightIcon}>Visit</LinkButton>
        <LinkButton {...args} href="https://example.com" size="sm">Small link</LinkButton>
        <LinkButton {...args} href="#" disabled>Disabled link</LinkButton>
      </div>
    )
  },
  args: {},
};

export const Disabled = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
};