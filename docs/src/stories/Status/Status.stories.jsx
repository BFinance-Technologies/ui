import { Status } from '@bf/bfinance-ui';

export default {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'large'],
    },
    type: {
      control: 'select',
      options: ['approved', 'pending','refunded', 'declined', 'processing'],
    },
  },
};

export const Approved = {
  args: {
    type: 'approved',
    variant: 'small',
    width: '100px',
  },
};

export const Pending = {
  args: {
    type  : 'pending',
    variant: 'small',
    width: '100px',

  },
};

export const Refunded = {
  args: {
    type  : 'refunded',
    variant: 'small',
    width: '100px',

  },
};

export const Declined = {
  args: {
    type: 'declined',
    variant: 'small',
    width: '100px',

  },
};

export const Processing = {
  args: {
    type: 'processing',
    variant: 'small',
    width: '100px',

  },
};    

export const LargeApproved = {
  args: {
    type: 'approved',
    variant: 'large', 
    width: '150px',
  }}