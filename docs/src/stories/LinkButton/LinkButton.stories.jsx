import React from 'react'
import { LinkButton, Badge } from '@bfinance/ui'
import { ScanLine, ArrowRightLine } from '@bfinance/icons'

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['md', 'sm']
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'destructive']
    },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
    badge: { control: 'object' }
  }
}

export const Default = {
  args: {
    children: 'Button',
    href: '#',
    size: 'md',
    mode: 'default',
    disabled: false
  },
  render: (args) => (
    <LinkButton {...args} />
  )
}

export const WithIcons = {
  args: {
    ...Default.args,
    children: 'Button',
    leftIcon: <ScanLine />,
    rightIcon: <ArrowRightLine />
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
      <LinkButton {...args} />
      <LinkButton {...args} mode="destructive" />
    </div>
   
  ),
}

export const WithBadge = {
  args: {
    ...Default.args,
    children: 'Button',
    badge: { value: 16 }
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
      <LinkButton {...args} />
      <LinkButton {...args} mode="destructive" />
    </div>
  )
}


export const Sizes = {
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
      <LinkButton 
        {...args} 
        size="md" 
        leftIcon={<ScanLine />} 
        rightIcon={<ArrowRightLine />} 
        badge={{value: 16}}
      >
        Button
      </LinkButton>
      <LinkButton 
        {...args} 
        size="sm" 
        leftIcon={<ScanLine />} 
        rightIcon={<ArrowRightLine />} 
        badge={{value: 16}}
      >
        Button
      </LinkButton>
    </div>
  ),
  args: {
    children: 'Button',
    href: '#',
    mode: 'default',
    disabled: false
  }
}

export const Disabled = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true

  },
  render: (args) => (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
      <LinkButton {...args} leftIcon={<ScanLine />} rightIcon={<ArrowRightLine /> } badge={{value: 16}} />
      <LinkButton {...args} mode="destructive" leftIcon={<ScanLine />} rightIcon={<ArrowRightLine />} badge={{value: 16}} />
    </div>
  )
}


