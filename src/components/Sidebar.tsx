import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/logo2.svg';
import { menu } from '@/utils/constants';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col">
      <div className="flex flex-row items-center p-5 space-x-2">
        <img src={logo} className="mx-auto" />
      </div>
      <div className="flex flex-col mt-12">
        {menu.map((item, index) => (
          <div
            className={cn(
              'flex flex-row items-center space-x-2 px-5 py-4 ',
              item.href.split('/')[1] === pathname.split('/')[1]
                ? 'bg-gray-300'
                : 'bg-none'
            )}
            key={index}
          >
            <item.icon />
            <Link className="font-semibold" to={item.href}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
