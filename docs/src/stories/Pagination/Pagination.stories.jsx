import React, { useState } from 'react';
import { Pagination } from '@bfinance/ui';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['arrows', 'buttons', 'numbers'] },
    size: { control: 'select', options: ['md', 'sm'] },
    disabled: { control: 'boolean' },
    showDots: { control: 'boolean' },
    dotsCount: { control: 'number' },
    showItemsCount: { control: 'boolean' },
    showRowsPerPage: { control: 'boolean' },
  },
};

const Controlled = (args) => {
  const [page, setPage] = useState(args.page ?? 57);
  const [pageSize, setPageSize] = useState(args.pageSize ?? 10);

  return (
    <Pagination
      {...args}
      page={page}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
};

export const ArrowsMd = {
  render: Controlled,
  args: { type: 'arrows', size: 'md', page: 1, totalPages: 5 },
};

export const ArrowsSm = {
  render: Controlled,
  args: { type: 'arrows', size: 'sm', page: 1, totalPages: 5 },
};

export const ButtonsMd = {
  render: Controlled,
  args: { type: 'buttons', size: 'md', page: 1, totalPages: 5 },
};

export const ButtonsSm = {
  render: Controlled,
  args: { type: 'buttons', size: 'sm', page: 1, totalPages: 5 },
};

export const NumbersSm = {
  render: Controlled,
  args: { type: 'numbers', size: 'sm', page: 57, totalPages: 100 },
};

export const NumbersMd = {
  render: Controlled,
  args: {
    type: 'numbers',
    size: 'md',
    page: 57,
    totalPages: 100,
    totalItems: 11473,
    pageSize: 10,
  },
};

export const ArrowsManyPages = {
  render: Controlled,
  args: { type: 'arrows', size: 'md', page: 1, totalPages: 20 },
};

export const Disabled = {
  render: Controlled,
  args: { type: 'numbers', size: 'md', page: 57, totalPages: 100, totalItems: 11473, disabled: true },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
      <Controlled type="arrows" size="md" page={1} totalPages={5} />
      <Controlled type="arrows" size="sm" page={1} totalPages={5} />
      <Controlled type="buttons" size="md" page={1} totalPages={5} />
      <Controlled type="buttons" size="sm" page={1} totalPages={5} />
      <Controlled type="numbers" size="sm" page={57} totalPages={100} />
      <Controlled type="numbers" size="md" page={57} totalPages={100} totalItems={11473} pageSize={10} />
    </div>
  ),
};
