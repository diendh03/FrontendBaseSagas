import { IGetListProductResp } from '~/apis/models/product';
import { BASE_RESPONSE } from '~/services/apiConstants';

interface ProductState {
  // Get List Product
  isLoading: boolean;
  isProductSuccess: boolean;
  isProductFail: boolean;
  productResp: IGetListProductResp;
}

export const initialState: ProductState = {
  // Get List Product
  isLoading: false,
  isProductSuccess: false,
  isProductFail: false,
  productResp: BASE_RESPONSE,
};
