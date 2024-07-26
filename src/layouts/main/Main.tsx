import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './Main.module.scss';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { RolesEnum } from '~/utils/enum';
import { Outlet } from 'react-router-dom';
import { privateRoutes } from '~/utils/constants/route';

type Props = {
  children?: ReactNode;
  role?: RolesEnum;
};

const cx = classNames.bind(styles);

const Main = (props: Props) => {
  return (
    <div id='mainVerticalLayout' className={cx('mainVerticalLayoutContainer')}>
      <div className={cx('mainVerticalLayoutHeader')}>
        <Header routes={privateRoutes} />
      </div>

      <div className={cx('mainVerticalLayoutBody')}>
        <div className={cx('mainVerticalBodyContainer')}>
          <div className={cx('mainVerticalBodyContent')}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
