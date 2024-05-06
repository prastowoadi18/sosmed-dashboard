import { AlbumsPhotos } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

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
];
