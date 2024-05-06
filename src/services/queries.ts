import { useQuery } from '@tanstack/react-query';
import { getAlbums, getAlbumsPhotos } from '@/services/api';
import { Albums, AlbumsPhotos } from '@/types';

export function useAlbums(params: { _limit: number }) {
  return useQuery<Albums[]>({
    queryKey: ['albums', params],
    queryFn: () => getAlbums(params),
  });
}

export function useAlbumsPhotos(params: { albumId: number }) {
  return useQuery<AlbumsPhotos[]>({
    queryKey: ['albums', params],
    queryFn: () => getAlbumsPhotos(params),
  });
}
