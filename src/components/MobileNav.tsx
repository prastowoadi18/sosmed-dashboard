import { Link } from 'react-router-dom';

import logo from '@/assets/logo2.svg';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[99999]" side="left">
        <div className="px-5 pt-7">
          <div className="flex flex-col pb-5 border-b">
            <img src={logo} className="mx-auto" />
          </div>
          <div className="flex flex-col mt-5 space-y-5">
            <Link to="/" className="">
              <p className="tracking-widest">Home</p>
            </Link>
            <Link to="/posts" className="">
              <p className="tracking-widest">Posts</p>
            </Link>
            <Link to="/albums" className="">
              <p className="tracking-widest">Albums</p>
            </Link>
            <Link to="/users" className="">
              <p className="tracking-widest">Users</p>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
