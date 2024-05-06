import App from '@/App';

import { AlbumsPage } from '@/pages/albums';
import { AlbumsDetailPage } from '@/pages/albums/detail';
import { PostsPage } from '@/pages/Posts';
import { UsersPage } from '@/pages/users';

import { Album, Home, MessageCircleIcon, Users2 } from 'lucide-react';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
      {
        path: '/albums',
        element: <AlbumsPage />,
      },
      {
        path: '/albums/:id',
        element: <AlbumsDetailPage />,
      },
    ],
  },
];

export const menu = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Posts',
    icon: MessageCircleIcon,
    href: '/posts',
  },
  {
    title: 'Albums',
    icon: Album,
    href: '/albums',
  },
  {
    title: 'Users',
    icon: Users2,
    href: '/users',
  },
];
