import { ColumnDef } from '@tanstack/react-table';

import { Users } from '@/types';

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: 'id',
    header: 'User ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => {
      return row.original.address.street;
    },
  },
  {
    accessorKey: 'company',
    header: 'Company',
    cell: ({ row }) => {
      return row.original.company.name;
    },
  },
];
