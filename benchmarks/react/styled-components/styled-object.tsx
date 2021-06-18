import React from 'react';
import styled from 'styled-components';
import { Table as BaseTable, TableRow as BaseTableRow } from '../Table';

const TableRow = styled(BaseTableRow)({
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#eee',
  },
  '> td': {
    border: '1px solid #ccc',
    padding: 8,
  },
});

const Table = styled(BaseTable)({
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
});

function StyledComponentsObject() {
  return <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>;
}

export default () => <StyledComponentsObject />;
