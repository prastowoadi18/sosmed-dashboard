import { request } from '@/services/utils';

export const getAlbums = (params: { _limit: number }) =>
  request({
    url: `/albums`,
    method: 'GET',
    params: params,
  });

export const getUsers = () =>
  request({
    url: `/users`,
    method: 'GET',
  });

export const getPosts = () =>
  request({
    url: `/posts`,
    method: 'GET',
  });

export const getPost = (postId: number) =>
  request({
    url: `/posts/${postId}`,
    method: 'GET',
  });

export const getPostComments = (params: { postId: number }) =>
  request({
    url: `/comments`,
    method: 'GET',
    params: params,
  });

export const getAlbumsPhotos = (params: { albumId: number }) =>
  request({
    url: `/photos`,
    method: 'GET',
    params: params,
  });
