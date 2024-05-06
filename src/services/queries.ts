import { useQuery } from '@tanstack/react-query';
import { getAlbums, getAlbumsPhotos, getUsers } from '@/services/api';
import { Albums, AlbumsPhotos, Users } from '@/types';

export function useUsers() {
  return useQuery<Users[]>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
}

export function useAlbums(params: { _limit: number }) {
  return useQuery<Albums[]>({
    queryKey: ['albums', params],
    queryFn: () => getAlbums(params),
  });
}

export function useAlbumsPhotos(params: { albumId: number }) {
  return useQuery<AlbumsPhotos[]>({
    queryKey: ['albums-photos', params],
    queryFn: () => getAlbumsPhotos(params),
  });
}
