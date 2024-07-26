// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// Components, Layouts, Pages
import { DropdownProfile, NavTab } from '~/components/specific';
// Others
import { NavTabTypeEnum, RolesEnum } from '~/utils/enum';
import { IRouteModel, IUserProfile } from '~/utils/interface/common';
// Styles, images, icons
import { images } from '~/assets';
import styles from './Header.module.scss';
import { dataUser } from '~/data/mockData';

type Props = {
  routes: IRouteModel[];
  userInfo?: IUserProfile;
};

const cx = classNames.bind(styles);

const Header = (props: Props) => {
  //#region Destructuring Props
  const { routes, userInfo = dataUser } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  const navigate = useNavigate();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleLogoClick = () => {
    return;
  };
  //#endregion Handle Function

  return (
    <div id='headerPatient' className={cx('headerWrap')}>
      <div className={cx('headerContent')}>
        <div className={cx('headerLogo')} onClick={handleLogoClick}>
          <img src={images.adminLogoSidebar} className={cx('logo')} alt={t('common_img_text_alt')} />
        </div>

        <NavTab routers={routes} typeStyle={NavTabTypeEnum.NAV} />

        <div className={cx('headerRight')}>
          <div className={cx('headerInfo')}>
            <DropdownProfile data={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
