import { usePosts, useUsers } from '@/services/queries';
import { MessageCircleIcon, Users2 } from 'lucide-react';

export const Dashboard = () => {
  const userQuery = useUsers();
  const { data: dataUser } = userQuery;

  const postQuery = usePosts();
  const { data: dataPost } = postQuery;

  if (!dataUser || !dataPost) {
    return null;
  }

  return (
    <div className="pb-20">
      <div className="w-full px-5 py-10 mt-10 rounded-md md:ml-10 md:w-1/2 bg-gray-50">
        <h2 className="text-2xl font-semibold">Welcome User</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iste
          maiores dolor id veniam quasi excepturi similique. Eaque, officiis
          quisquam!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 px-5 mt-20 md:grid-cols-4 md:ml-5">
        <div className="h-[150px] md:h-[200px] bg-gradient-to-t from-gray-300 to-transparent rounded-md">
          <div className="flex flex-col justify-between h-full p-5 text-white">
            <div className="">
              <Users2 className="w-16 h-16 text-black/80" />
              <p className="text-xl font-semibold">{dataUser.length}</p>
            </div>
            <p className="font-semibold uppercase">Users</p>
          </div>
        </div>

        <div className="h-[150px] md:h-[200px] bg-gradient-to-t from-gray-300 to-transparent rounded-md">
          <div className="flex flex-col justify-between h-full p-5 text-white">
            <div className="">
              <MessageCircleIcon className="w-16 h-16 text-black/80" />
              <p className="text-xl font-semibold">{dataPost.length}</p>
            </div>
            <p className="font-semibold uppercase">Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
