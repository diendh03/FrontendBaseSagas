// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// Components, Layouts, Pages
import { AvatarFirstLastName } from '~/components/specific';
// Others
import { EMPTY_STRING } from '~/utils/constants/common';
// Styles, images, icons
import styles from './AvatarWithFallback.module.scss';

type Props = {
  avatarUrl?: string;
  index?: number;
  firstName?: string;
  lastName?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  borderRadius?: number | string;
};

const cx = classNames.bind(styles);

const AvatarWithFallback = (props: Props) => {
  //#region Destructuring Props
  const { firstName, lastName, index, avatarUrl, width, height, fontSize, borderRadius } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [imageErrorMap, setImageErrorMap] = useState<{ [key: string]: boolean }>({});
  const [isImageError, setIsImageError] = useState<boolean>(false);
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleImageKeyError = (key: string | number) => {
    setImageErrorMap((prev) => ({ ...prev, [key]: true }));
  };

  const handleImageKeySuccess = (key: string | number) => {
    setImageErrorMap((prev) => ({ ...prev, [key]: false }));
  };

  const handleImageError = () => {
    setIsImageError(true);
  };

  const handleImageSuccess = () => {
    setIsImageError(false);
  };
  //#endregion Handle Function

  return (
    <div id='avatarTable' className={cx('avatarTable')}>
      {index ? (
        avatarUrl && !imageErrorMap[index] ? (
          <img
            style={{ width, height, borderRadius }}
            className={cx('imgStyle')}
            src={avatarUrl}
            alt={t('common_img_text_alt')}
            onError={() => handleImageKeyError(index)}
            onLoad={() => handleImageKeySuccess(index)}
          />
        ) : !firstName && !lastName ? (
          EMPTY_STRING
        ) : (
          <div className={cx('avatarStyle')}>
            <AvatarFirstLastName
              borderRadius={borderRadius}
              width={width}
              height={height}
              fontSize={fontSize}
              firstName={firstName}
              lastName={lastName}
            />
          </div>
        )
      ) : avatarUrl && !isImageError ? (
        <img
          style={{ width, height, borderRadius }}
          className={cx('imgStyle')}
          src={avatarUrl}
          alt={t('common_img_text_alt')}
          onError={handleImageError}
          onLoad={handleImageSuccess}
        />
      ) : !firstName && !lastName ? (
        EMPTY_STRING
      ) : (
        <div className={cx('avatarStyle')}>
          <AvatarFirstLastName
            borderRadius={borderRadius}
            width={width}
            height={height}
            fontSize={fontSize}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
      )}
    </div>
  );
};

export default AvatarWithFallback;
