// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// Components, Layouts, Pages
// Others
import { getInitialsName } from '~/utils/helper';
// Styles, images, icons
import styles from './AvatarFirstLastName.module.scss';

type Props = {
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  firstName?: string;
  lastName?: string;
  borderRadius?: number | string;
};

const cx = classNames.bind(styles);

const AvatarFirstLastName = (props: Props) => {
  //#region Destructuring Props
  const { width, height, firstName, lastName, fontSize, borderRadius } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
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
    <div
      id='avatarFirstLastName'
      className={cx('avatar')}
      style={{ width, height, fontSize, borderRadius }}
    >
      {getInitialsName(firstName, lastName)}
    </div>
  );
};

export default AvatarFirstLastName;
