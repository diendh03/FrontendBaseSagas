// Libs
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// Components, Layouts, Pages
import BaseTable from '~/components/common/baseTable/BaseTable';
// Others
import { ColumnTableType } from '~/utils/interface/common';
import { productActions, selectIsLoading, selectListProductResp } from '~/redux/sagas/product/slice';
import { IGetListProductResp } from '~/apis/models/product';
import { IProductResp } from '~/utils/interface/product';
// Styles, images, icons
import styles from './Home.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const Home = (props: Props) => {
  //#region Destructuring Props
  const {} = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const dispatch = useDispatch();
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Declare Selector
  const productResp: IGetListProductResp = useSelector(selectListProductResp);
  const isLoadingProductResp: boolean = useSelector(selectIsLoading);
  //#endregion Declare Selector

  //#region Declare State
  const [dataListProduct, setDataListProduct] = useState<any>();
  //#endregion Declare State

  //#region Implement Hook (useEffect,...)
  useEffect(() => {
    dispatch(
      productActions.getList({
        limit: 10,
      })
    );
  }, []);

  useEffect(() => {
    if (!productResp.docs) {
      return;
    }
    setDataListProduct(productResp.docs);
  }, [productResp]);
  //#endregion Implement Hook

  const columns: ColumnTableType<IProductResp>[] = [
    {
      key: 'productName',
      title: t('product_name'),
      dataIndex: 'productName',
      width: 20,
      render: (_, record: IProductResp) => {
        return (
          <div className={cx('cellContainer', 'textStyle')}>
            <span>{record.productName || t('no_data')}</span>
          </div>
        );
      },
    },
    {
      key: 'price',
      title: t('product_price'),
      dataIndex: 'price',
      width: 50,
      render: (_, record: IProductResp) => {
        return (
          <div className={cx('cellContainer', 'textStyle')}>
            <span className={cx('cellText')}>{record.price || t('no_data')}</span>
          </div>
        );
      },
    },
    {
      key: 'createAt',
      title: t('Create At'),
      dataIndex: 'createdAt',
      width: 100,
      render: (_, record: IProductResp) => {
        return (
          <div className={cx('cellContainer', 'textStyle')}>
            <span className={cx('cellText')}>{record.createdAt || t('no_data')}</span>
          </div>
        );
      },
    },
    {
      key: 'description',
      title: t('Description'),
      dataIndex: 'description',
      width: 200,
      render: (_, record: IProductResp) => {
        return (
          <div className={cx('cellContainer', 'textStyle')}>
            <span className={cx('cellText')}>{record.description || t('no_data')}</span>
          </div>
        );
      },
    },
    {
      key: 'action',
      title: t('Action'),
      width: 100,
      render: (_, record: IProductResp) => {
        return (
          <div className={cx('actionCell')}>
            <button className={cx('deleteButton')}>{t('common_btn_delete')}</button>
            <button className={cx('updateButton')}>{t('common_btn_update')}</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        <div>
          <p>{t('Danh sách sản phẩm')}</p>
        </div>
      </div>
      <div className={cx('tableProduct')}>
        <BaseTable columns={columns} dataSource={dataListProduct || []} />
      </div>
    </div>
  );
};

export default Home;
