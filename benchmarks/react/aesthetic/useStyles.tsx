import React from 'react';
import { useStyles, createComponentStyles, ThemeProvider } from '@aesthetic/react';
import { Table as BaseTable, TableRow as BaseTableRow, TableRowProps, TableProps } from '../Table';
import './setup';

const styleSheet = createComponentStyles(() => ({
  table: {
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
  },
  row: {
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
  },
}));

function TableRow(props: Omit<TableRowProps, 'className'>) {
  const cx = useStyles(styleSheet);

  return <BaseTableRow className={cx('row')} {...props} />;
}

function Table({ children, ...props }: Omit<TableProps, 'className'>) {
  const cx = useStyles(styleSheet);

  return (
    <BaseTable className={cx('table')} {...props}>
      {children}
    </BaseTable>
  );
}

function AestheticUseStyles() {
  return (
    <ThemeProvider name="day">
      <Table>{(data) => data.map((item) => <TableRow key={item.id} {...item} />)}</Table>
    </ThemeProvider>
  );
}

export default () => <AestheticUseStyles />;
