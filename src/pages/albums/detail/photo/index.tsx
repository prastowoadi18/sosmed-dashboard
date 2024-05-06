import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePhoto } from '@/services/queries';

import { useParams } from 'react-router-dom';

export function DetailPhotoPage() {
  const { id } = useParams();
  const postQuery = usePhoto(parseInt(id!));
  const { data } = postQuery;
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
            <BreadcrumbLink href={`/albums/${data.albumId}`}>
              Albums Photos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold text-gray-600 mb-14">
          Detail Photo
        </h1>
        <h2 className="mb-2 text-xl font-semibold capitalize">{data.title}</h2>
        <div className="flex flex-row items-center gap-10 mt-5 text-center">
          <div className="text-muted-foreground">
            <a href={data.url} target="_blank">
              <img src={data.url} className="w-20 h-20 rounded-md" />
            </a>
            <p className="mt-2">URL</p>
          </div>
          <div className="text-muted-foreground">
            <a href={data.thumbnailUrl} target="_blank">
              <img
                src={data.thumbnailUrl}
                className="w-20 h-20 mx-auto rounded-md"
              />
            </a>
            <p className="mt-2 text-sm">Thumbnail URL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
