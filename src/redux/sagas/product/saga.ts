import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { productActions } from './slice';
import { getListProduct } from '~/services/productService';
import { PayloadAction } from '@reduxjs/toolkit';

function* getList(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse = yield call(getListProduct, action?.payload);
    if (response.data) {
      console.log(`handleGetListProduct: -> response: ${JSON.stringify(response.data)}`);

      yield put(productActions.getListSuccess(response.data));
    }
  } catch (error: any) {
    if (error.data) {
      const errMsg = `[product saga.ts] handleGetListProduct -> err: ${JSON.stringify(error)}`;
      console.log(errMsg);
      yield put(productActions.getListFail(error.data));
    }
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.getList.type, getList);
}
