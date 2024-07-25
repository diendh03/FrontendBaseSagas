import { ResponseStatus } from '~/services/apiConstants';

// Data response
export interface IParamsGetList {
  page?: number;
  limit?: number;
}

export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export interface BaseResponse {
  status: ResponseStatus | null;
  message: string;
  code: number | null;
}
