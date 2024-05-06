import { AlbumsPhotos } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<AlbumsPhotos>[] = [
  {
    accessorKey: 'albumId',
    header: 'Album ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'url',
    header: 'Image',
    cell: ({ row }) => {
      return <img className="w-10 h-10" src={row.original.url} />;
    },
  },
  {
    accessorKey: 'thumbnailUrl',
    header: 'Thumbnail',
    cell: ({ row }) => {
      return <img className="w-10 h-10" src={row.original.thumbnailUrl} />;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const albums = row.original;

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
              <Link to={`/albums/photo/${albums.id}`}>View Detail</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
