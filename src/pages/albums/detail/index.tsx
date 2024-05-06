import { useAlbumsPhotos } from '@/services/queries';
import { useParams } from 'react-router-dom';
import { DataTable } from './data-table';
import { columns } from './columns';

export function AlbumsDetailPage() {
  const { id } = useParams();
  const albumsQuery = useAlbumsPhotos({ albumId: parseInt(id!) });
  const { data } = albumsQuery;
  console.log('data', data);
  if (!data) {
    return null;
  }
  return (
    <div className="px-5 py-10">
      <h1 className="mb-10 text-2xl font-semibold text-gray-600">
        List Photos from Albums
      </h1>
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
