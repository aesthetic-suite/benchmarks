import React from 'react';
import { useFela, RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { Table as BaseTable, TableRow as BaseTableRow, TableRowProps, TableProps } from '../Table';

const tableRowStyles = {
  backgroundColor: '#fff',
  ':hover': {
    backgroundColor: '#eee',
  },
  '> td': {
    border: '1px solid #ccc',
    padding: 8,
  },
};

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
};

function TableRow(props: Omit<TableRowProps, 'className'>) {
  const { css } = useFela();

  return <BaseTableRow className={css(tableRowStyles)} {...props} />;
}

function Table({ children, ...props }: Omit<TableProps, 'className'>) {
  const { css } = useFela();

  return (
    <BaseTable className={css(tableStyles)} {...props}>
      {children}
    </BaseTable>
  );
}

const renderer = createRenderer();

function FelaUseFela() {
  return (
    <RendererProvider renderer={renderer}>
      <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>
    </RendererProvider>
  );
}

export default () => <FelaUseFela />;
