/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@filbert-js/core';
import { Table, TableRow as BaseTableRow, TableRowProps } from '../Table';

const rowStyles = css`
  background-color: #fff;
  &:hover {
    background-color: #eee;
  }
  > td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

function TableRow(props: Omit<TableRowProps, 'className'>) {
  return <BaseTableRow css={rowStyles} {...props} />;
}

const tableStyles = css`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;
  > thead > tr {
    background-color: #eee;
    > th {
      border: 1px solid #ccc;
      padding: 8px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

function FilbertCssString() {
  return (
    <Table css={tableStyles}>
      {(data) => data.map((item) => <TableRow key={item.id} {...item} />)}
    </Table>
  );
}

export default () => <FilbertCssString />;
