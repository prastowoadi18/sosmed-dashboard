import { useQuery } from '@tanstack/react-query';
import {
  getAlbums,
  getAlbumsPhotos,
  getPost,
  getPostComments,
  getPosts,
  getUsers,
} from '@/services/api';
import { Albums, AlbumsPhotos, Comments, Posts, Users } from '@/types';

export function useUsers() {
  return useQuery<Users[]>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
}

export function usePosts() {
  return useQuery<Posts[]>({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });
}

export function usePostsComments(params: { postId: number }) {
  return useQuery<Comments[]>({
    queryKey: ['comments', params],
    queryFn: () => getPostComments(params),
  });
}

export function usePost(postId: number) {
  return useQuery<Posts>({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
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
