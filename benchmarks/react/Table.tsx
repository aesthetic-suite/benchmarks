import React, { useMemo } from 'react';
import faker from 'faker';

export interface Item {
  id: number;
  name: string;
  currency: string;
  amount: number;
  date: Date;
}

function createFakeData() {
  const data: Item[] = [];

  for (let i = 1; i <= 100; i += 1) {
    data.push({
      id: i,
      name: faker.name.findName(),
      currency: faker.finance.currencyCode(),
      amount: faker.random.number(10000),
      date: faker.date.past(),
    });
  }

  return data;
}

export interface TableRowProps extends Item {
  className: string;
}

export function TableRow({ className, id, name, currency, amount, date }: TableRowProps) {
  return (
    <tr className={className}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{amount.toLocaleString('en', { style: 'currency', currency })}</td>
      <td>{date.toISOString()}</td>
    </tr>
  );
}

export function Table({
  children,
  className,
}: {
  children: (data: Item[]) => React.ReactNode;
  className: string;
}) {
  const data = useMemo(() => createFakeData(), []);

  return (
    <table className={className}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{children(data)}</tbody>
    </table>
  );
}
