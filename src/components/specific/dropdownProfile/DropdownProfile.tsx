// Libs
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// Components, Layouts, Pages
import { AvatarWithFallBack } from '~/components/specific';
// import { IUserProfile } from '~/utils/interface/common';
// Others
// Styles, images, icons
import { icons, images } from '~/assets';
import styles from './DropdownProfile.module.scss';

type Props = {
  data: any;
};

const cx = classNames.bind(styles);

const DropdownProfile = (props: Props) => {
  //#region Destructuring Props
  const { data } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  const dropdownProfileRef = useRef<HTMLDivElement>(null);
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  //#endregion Declare State

  //#region Implement Hook
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  //#endregion Implement Hook

  //#region Handle Function
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownProfileRef.current && !dropdownProfileRef.current.contains(event.target as Node)) {
      setIsShowDropdown(false);
    }
  };

  const handleToggleClick = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const handleLogout = () => {
    handleLogoutModal();
  };

  const handleLogoutModal = () => {
    setIsLogoutModal(!isLogoutModal);
  };

  const handleRenderUserName = () => {
    if (data?.firstName && data?.lastName) {
      return `${data?.firstName} ${data?.lastName}`;
    }

    if (data?.firstName && !data?.lastName) {
      return data?.firstName;
    }

    if (data?.lastName && !data?.firstName) {
      return data?.lastName;
    }
  };
  //#endregion Handle Function

  return (
    <div id='dropdownProfileComponent'>
      <div className={cx('dropdownProfileWrap')} ref={dropdownProfileRef}>
        <div className={cx('headerAvatarDropdown')}>
          <div className={cx('headerAvatarWrap')} onClick={handleToggleClick}>
            <div className={cx('headerAvatarImg')}>
              <AvatarWithFallBack
                avatarUrl={data.avatarUrl}
                firstName={data.firstName}
                lastName={data.lastName}
                width={40}
                height={40}
                fontSize={20}
              />
            </div>
            {(data.firstName || data.lastName) && (
              <div className={cx('headerNameWrap')}>
                <span className={cx('headerName')}>{handleRenderUserName()}</span>
              </div>
            )}
            <div className={cx('headerDropdownWrap')}>
              <img src={icons.adminHeaderIconDropdown} className={cx('headerDropdown')} alt={t('Search icon')} />
            </div>
          </div>
          {isShowDropdown && (
            <div className={cx('headerAvatarOption')}>
              <button className={cx('headerOptionText')} onClick={handleLogout}>
                {t('Logout')}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* {isLogoutModal && <LogoutModal onClose={handleLogoutModal} />} */}
    </div>
  );
};

export default DropdownProfile;
