import { useAlbums } from '@/services/queries';
import { DataTable } from './data-table';
import { columns } from './columns';

export function AlbumsPage() {
  const albumsQuery = useAlbums({ _limit: 25 });
  const { data } = albumsQuery;
  if (!data) {
    return null;
  }

  return (
    <div className="px-5 py-10">
      <h1 className="mb-10 text-2xl font-semibold text-gray-600">
        List Albums
      </h1>
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
