import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './Main.module.scss';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { RolesEnum } from '~/utils/enum';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  role?: RolesEnum;
};

const cx = classNames.bind(styles);

const Main = (props: Props) => {
  return (
    <div className={cx('mainContainer')}>
      <div className={cx('sidebarContainer')}>
        <Sidebar />
      </div>

      <div className={cx('primaryContent')}>
        <Header />

        <div className={cx('content')}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
