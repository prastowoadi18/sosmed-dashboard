import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { DataTable } from '@/pages/users/data-table';
import { columns } from '@/pages/users/columns';

import '@testing-library/jest-dom/vitest';

describe('DATA USER', () => {
  it('should render retrun data user', async () => {
    render(
      <DataTable
        data={[
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: {
                lat: '-37.3159',
                lng: '81.1496',
              },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          },
        ]}
        columns={columns}
      />
    );
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });
});
