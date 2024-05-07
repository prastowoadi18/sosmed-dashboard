import { request } from '@/services/utils';
import { IPayload, IPayloadComment } from '@/types';

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

export const addPost = (data: IPayload) =>
  request({
    url: `/posts`,
    method: 'POST',
    data,
  });

export const updatePost = (data: IPayload) =>
  request({
    url: `/posts/${data.id}`,
    method: 'PUT',
    data,
  });

export const deletePost = (id: number) =>
  request({
    url: `/posts/${id}`,
    method: 'DELETE',
  });

export const getComments = () =>
  request({
    url: `/comments`,
    method: 'GET',
  });

export const getPostComments = (params: { postId: number }) =>
  request({
    url: `/comments`,
    method: 'GET',
    params: params,
  });

export const addComment = (data: IPayloadComment) =>
  request({
    url: `/comments`,
    method: 'POST',
    data,
  });

export const updateComment = (data: IPayloadComment) =>
  request({
    url: `/comments/${data.id}`,
    method: 'PUT',
    data,
  });

export const deleteComment = (id: number) =>
  request({
    url: `/comments/${id}`,
    method: 'DELETE',
  });

export const getAlbumsPhotos = (params: { albumId: number }) =>
  request({
    url: `/photos`,
    method: 'GET',
    params: params,
  });

export const getPhoto = (id: number) =>
  request({
    url: `/photos/${id}`,
    method: 'GET',
  });
