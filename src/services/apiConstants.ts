export const CONTENT_TYPE_JSON = 'application/json';
export const CONTENT_TYPE_FORM_DATA = 'multipart/form-data';

export enum ResponseCode {
  OK = 200,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

// Response
export const BASE_RESPONSE = {
  status: null,
  message: '',
  code: null,
};

export enum ResponseStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  ERROR = 'error',
}

export const NETWORK_ERROR = {
  data: {
    status: ResponseStatus.FAILED,
    Message: 'network error',
    code: null,
  },
};

// Storage Keys
export const TOKEN_STORAGE_KEY = 'auth_token';
export const ACCOUNT_ID_STORAGE_KEY = 'account_id';
export const ROLE_STORAGE_KEY = 'role';
export const EMAIL_STORAGE_KEY = 'email';
export const LANGUAGE_STORAGE_KEY = 'Language';

// Define APIs
// Auth
export const LOGIN_API = 'auth/login';
export const REGISTER_API = 'auth/register';
export const LOGOUT_API = 'auth/logout';

// Product
export const GET_LIST_PRODUCT = 'products';

// Others
export const BASIC_DATA = '/basic-data';
export const NEW_BASIC_DATA = '/basic-data/new';
