/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Table, TableRow as BaseTableRow, TableRowProps } from '../Table';

const rowStyles = {
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#eee',
  },
  '> td': {
    border: '1px solid #ccc',
    padding: 8,
  },
} as const;

function TableRow(props: Omit<TableRowProps, 'className'>) {
  return <BaseTableRow css={rowStyles} {...props} />;
}

const tableStyles = {
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '> thead > tr': {
    backgroundColor: '#eee',
    '> th': {
      border: '1px solid #ccc',
      padding: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
} as const;

function EmotionCssObject() {
  return (
    <Table css={tableStyles}>
      {(data) => data.map((item) => <TableRow key={item.id} {...item} />)}
    </Table>
  );
}

export default () => <EmotionCssObject />;
