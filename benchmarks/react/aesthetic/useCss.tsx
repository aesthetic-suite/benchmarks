import React, { useMemo } from 'react';
import { useCss } from '@aesthetic/react';
import { Table, TableRow, TableRowProps } from '../Table';

function Row(props: Omit<TableRowProps, 'className'>) {
  const styles = useMemo(
    () => ({
      backgroundColor: '#fff',
      ':hover': {
        backgroundColor: '#eee',
      },
      '> td': {
        border: '1px solid #ccc',
        padding: 8,
      },
    }),
    [],
  );
  const className = useCss(styles);

  return <TableRow className={className} {...props} />;
}

function AestheticUseCss() {
  const styles = useMemo(
    () => ({
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
    }),
    [],
  );
  const className = useCss(styles);

  return (
    <Table className={className}>
      {(data) => data.map((item) => <Row key={item.id} {...item} />)}
    </Table>
  );
}

export default () => <AestheticUseCss />;
