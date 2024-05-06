import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/logo2.svg';
import { menu } from '@/utils/constants';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:block w-[250px] bg-gray-100 shadow-md">
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
