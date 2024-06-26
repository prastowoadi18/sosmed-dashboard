import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { useAlbumsPhotos } from '@/services/queries';
import { DataTable } from './data-table';
import { columns } from './columns';

export function AlbumsDetailPage() {
  const { id } = useParams();
  const albumsPhotosQuery = useAlbumsPhotos({ albumId: parseInt(id!) });
  const { data } = albumsPhotosQuery;

  if (!data) {
    return null;
  }

  return (
    <div className="px-5 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/albums">Albums</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Photos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-5 mb-10 text-2xl font-semibold text-gray-600">
        List Photos from Albums
      </h1>
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
