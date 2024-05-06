import { Link } from 'react-router-dom';
import { Edit, Eye, MessageSquare, MoreHorizontal, Trash } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';

import { Posts } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import DeletePost from '@/components/posts/DialogDelete';
import EditPost from '@/components/posts/DialogEdit';

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
        <div className="flex flex-row items-center space-x-2">
          <Button variant="secondary" size="iconcm" asChild>
            <Link to={`/posts/${posts.id}`}>
              <Eye className="w-3 h-3" />
            </Link>
          </Button>
          <EditPost data={posts} />
          <Button size="iconcm" asChild>
            <Link to={`/posts/${posts.id}/comments`}>
              <MessageSquare className="w-3 h-3" />
            </Link>
          </Button>
          <DeletePost id={posts.id} />
        </div>
      );
    },
  },
];
