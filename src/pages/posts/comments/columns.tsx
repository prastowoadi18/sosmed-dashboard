import EditPost from '@/components/comments/DialogEdit';
import DeletePost from '@/components/posts/DialogDelete';

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
  {
    id: 'actions',
    cell: ({ row }) => {
      const posts = row.original;

      return (
        <div className="flex flex-row items-center space-x-2">
          <EditPost data={posts} />
          <DeletePost id={posts.id} />
        </div>
      );
    },
  },
];
