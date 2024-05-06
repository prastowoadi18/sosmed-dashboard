import axios, { AxiosError, AxiosResponse } from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const axiosInstance = axios.create({ baseURL: BASE_URL });

export const request = async (options: any) => {
  const onSuccess = (response: AxiosResponse) => {
    return response?.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  return axiosInstance(options).then(onSuccess).catch(onError);
};
