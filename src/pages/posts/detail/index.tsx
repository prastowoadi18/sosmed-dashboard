import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePost } from '@/services/queries';

import { useParams } from 'react-router-dom';

export function PostPage() {
  const { id } = useParams();
  const postQuery = usePost(parseInt(id!));
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
            <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold text-gray-600 mb-14">
          Detail Post
        </h1>
        <h2 className="mb-2 text-xl font-semibold capitalize">{data.title}</h2>
        <p className="w-1/2 text-muted-foreground">{data.body}</p>
      </div>
    </div>
  );
}
