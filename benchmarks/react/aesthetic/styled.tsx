import React from 'react';
import { styled, ThemeProvider } from '@aesthetic/react';
import { Table as BaseTable, TableRow as BaseTableRow } from '../Table';
import './setup';

const TableRow = styled(BaseTableRow, {
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
});

const Table = styled(BaseTable, {
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
});

function AestheticStyled() {
  return (
    <ThemeProvider name="day">
      <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>
    </ThemeProvider>
  );
}

export default () => <AestheticStyled />;
