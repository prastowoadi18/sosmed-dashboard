import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';

import { Posts } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export const columns: ColumnDef<Posts>[] = [
  {
    accessorKey: 'id',
    header: 'Post ID',
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link to={`/posts/${posts.id}`}>Detail Post</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={`/posts/${posts.id}/comments`}>View Comments</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
