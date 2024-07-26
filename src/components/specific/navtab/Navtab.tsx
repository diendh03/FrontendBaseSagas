// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
// Components, Layouts, Pages
// Others
import { NavTabTypeEnum } from '~/utils/enum';
import { hasActiveChild } from '~/utils/helper';
import { IRouteModel } from '~/utils/interface/common';
// Styles, images, icons
import styles from './Navtab.module.scss';

type Props = {
  totalItem?: number;
  typeStyle?: NavTabTypeEnum;
  routers: IRouteModel[];
};

const cx = classNames.bind(styles);

const NavTab = (props: Props) => {
  //#region Destructuring Props
  const { totalItem, typeStyle, routers } = props;
  console.log(routers);

  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  const location = useLocation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div id='navTabComponent' className={cx('navTabContainer', typeStyle)}>
      {routers.map((nav) => {
        if (!nav.name) {
          return;
        }
        const navName = nav.name as string;
        const activeSubmenu = hasActiveChild(nav, location.pathname);

        return (
          <NavLink
            key={nav.path}
            to={nav.path}
            end={nav.index}
            className={({ isActive }) => cx('navLink', (isActive || activeSubmenu) && 'navLinkActive', typeStyle)}
          >
            {({ isActive }) => (
              <>
                <span className={cx('textStyle', (isActive || activeSubmenu) && 'textStyleActive', typeStyle)}>
                  {t(navName)}
                </span>

                {typeStyle === NavTabTypeEnum.TAB_VALUE && totalItem && <p className={cx('numberItem')}>{totalItem}</p>}
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavTab;
