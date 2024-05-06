import { useParams } from 'react-router-dom';

import { usePostsComments } from '@/services/queries';
import { DataTable } from './data-table';
import { columns } from './columns';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function PostsCommentsPage() {
  const { id } = useParams();
  const postsCommentsQuery = usePostsComments({ postId: parseInt(id!) });
  const { data } = postsCommentsQuery;
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
            <BreadcrumbPage>Comments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-5 mb-10 text-2xl font-semibold text-gray-600">
        List Comments
      </h1>
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
