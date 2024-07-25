import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { RootState } from '~/redux/store';

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Get List Product
    getList(state, _action) {
      state.isLoading = true;
      state.isProductSuccess = false;
      state.isProductFail = false;
    },
    getListSuccess(state, _action) {
      state.isLoading = false;
      state.isProductSuccess = true;
      state.productResp = _action.payload;
    },
    getListFail(state, _action) {
      state.isLoading = false;
      state.isProductFail = true;
    },

    resetState() {
      return initialState;
    },
  },
});

//#region Selectors
// Login
export const selectIsLoading = (state: RootState) => state.product.isLoading;
export const selectIsListProductSuccess = (state: RootState) => state.product.isProductSuccess;
export const selectIsListProductFail = (state: RootState) => state.product.isProductFail;
export const selectListProductResp = (state: RootState) => state.product.productResp;

//#endregion Selectors

//#region Reducer
const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
//#endregion Reducer

export default productReducer;
