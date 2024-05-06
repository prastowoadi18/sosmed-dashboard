import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { menu } from './utils/constants';

function App() {
  const { pathname } = useLocation();
  const titleHead = menu.find(
    (e) => e.href.split('/')[1] === pathname.split('/')[1]
  )?.title;

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-row items-center justify-between px-5 py-2 border-b shadow-md">
          <h1 className="font-semibold">{titleHead}</h1>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
