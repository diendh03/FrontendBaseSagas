import axiosClient from '~/apis/axiosClient';
import { GET_LIST_PRODUCT } from './apiConstants';
import { AxiosResponse } from 'axios';
import { IParamsGetList } from '~/apis/models/commonModel';

export async function getListProduct(params?: IParamsGetList): Promise<AxiosResponse> {
  console.log(`[Product Service] Get List Doctor: ${JSON.stringify(params)}`);

  return axiosClient.get(GET_LIST_PRODUCT, {
    params,
  });
}
