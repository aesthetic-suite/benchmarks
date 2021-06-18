import React from 'react';
import styled from 'styled-components';
import { Table as BaseTable, TableRow as BaseTableRow } from '../Table';

const TableRow = styled(BaseTableRow)`
  background-color: #fff;
  &:hover {
    background-color: #eee;
  }
  & > td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const Table = styled(BaseTable)`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  & > thead > tr {
    background-color: #eee;

    & > th {
      border: 1px solid #ccc;
      padding: 8px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

function StyledComponentsString() {
  return <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>;
}

export default () => <StyledComponentsString />;
