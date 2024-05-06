import { request } from '@/services/utils';

export const getAlbums = (params: { _limit: number }) =>
  request({
    url: `/albums`,
    method: 'GET',
    params: params,
  });

export const getAlbumsPhotos = (params: { albumId: number }) =>
  request({
    url: `/photos`,
    method: 'GET',
    params: params,
  });
