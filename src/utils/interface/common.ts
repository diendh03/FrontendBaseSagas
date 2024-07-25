export interface IRouteModel {
  path: string;
  component: React.ElementType;
  children?: IRouteModel[];
  name?: string;
  image?: string;
  imageActive?: string;
  index?: boolean;
}

export interface IDataTable {
  _id: string;
}

export interface ColumnTableType<T> {
  key: string;
  dataIndex?: keyof T;
  title: string;
  width?: number | string;
  render?: (value: T[keyof T], record: T, index: number) => React.ReactNode;
}
