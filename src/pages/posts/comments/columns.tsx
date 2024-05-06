import { Comments } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Comments>[] = [
  {
    accessorKey: 'id',
    header: 'Comment ID',
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
    accessorKey: 'body',
    header: 'Body',
    cell: ({ row }) => {
      return (
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: row.getValue('body') }}
        />
      );
    },
  },
];
