import { BaseResponse } from './commonModel';

export interface IGetProduct {
  _id: string;
  productName: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  createAt: string;
}

export interface IGetListProductResp extends BaseResponse {
  docs?: IGetProduct[];
}
