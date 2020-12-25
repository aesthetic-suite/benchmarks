import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Table as BaseTable, TableRow as BaseTableRow, TableRowProps, TableProps } from '../Table';

const styles = StyleSheet.create({
  table: {
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
  },
  row: {
    backgroundColor: '#fff',
    ':hover': {
      backgroundColor: '#eee',
    },
    '> td': {
      border: '1px solid #ccc',
      padding: 8,
    },
  },
});

function TableRow(props: Omit<TableRowProps, 'className'>) {
  const className = useMemo(() => css(styles.row), []);

  return <BaseTableRow className={className} {...props} />;
}

function Table({ children, ...props }: Omit<TableProps, 'className'>) {
  const className = useMemo(() => css(styles.table), []);

  return (
    <BaseTable className={className} {...props}>
      {children}
    </BaseTable>
  );
}

function Aphrodite() {
  return <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>;
}

export default () => <Aphrodite />;
