import React from 'react';
import { Rule, useCss } from '@aesthetic/react';
import { Table, TableRow as BaseTableRow, TableRowProps } from '../Table';

const rowStyles: Rule = {
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#eee',
  },
  '@selectors': {
    '> td': {
      border: '1px solid #ccc',
      padding: 8,
    },
  },
};

function TableRow(props: Omit<TableRowProps, 'className'>) {
  const className = useCss(rowStyles);

  return <BaseTableRow className={className} {...props} />;
}

const tableStyles: Rule = {
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '@selectors': {
    '> thead > tr': {
      backgroundColor: '#eee',
      '@selectors': {
        '> th': {
          border: '1px solid #ccc',
          padding: 8,
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
  },
};

function AestheticUseCss() {
  const { className } = useCss(tableStyles);

  return (
    <Table className={className}>
      {(data) => data.map((item) => <TableRow key={item.id} {...item} />)}
    </Table>
  );
}

export default () => <AestheticUseCss />;
