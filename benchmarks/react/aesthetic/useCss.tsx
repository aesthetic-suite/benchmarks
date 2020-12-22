import React from 'react';
import { Rule, useCss } from '@aesthetic/react';
import { Table, TableRow, TableRowProps } from '../Table';

const rowStyles: Rule = {
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#eee',
  },
  '> td': {
    border: '1px solid #ccc',
    padding: 8,
  },
};

function Row(props: Omit<TableRowProps, 'className'>) {
  const className = useCss(rowStyles);

  return <TableRow className={className} {...props} />;
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
  '> thead > tr': {
    backgroundColor: '#eee',
    '> th': {
      border: '1px solid #ccc',
      padding: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
};

function AestheticUseCss() {
  const className = useCss(tableStyles);

  return (
    <Table className={className}>
      {(data) => data.map((item) => <Row key={item.id} {...item} />)}
    </Table>
  );
}

export default () => <AestheticUseCss />;
