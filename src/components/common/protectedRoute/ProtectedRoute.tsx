// Libs
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
// Components, Layouts, Pages
// Others
import { userRoute } from '~/utils/constants/route';
import { RolesEnum, StorageEnum } from '~/utils/enum';
// Styles, images, icons

type Props = {
  role: RolesEnum;
};

const ProtectedRoute = (props: Props) => {
  //#region Destructuring Props
  const { role } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const location = useLocation();
  const navigate = useNavigate();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [isLoggedIn] = useState<string | null>(localStorage.getItem(StorageEnum.ACCESS_TOKEN)! || null);
  const [currentRole] = useState<string | null>(localStorage.getItem(StorageEnum.USER));

  useEffect(() => {
    const currentRole = localStorage.getItem(StorageEnum.USER);
    if (currentRole === role) {
      return;
    }

    localStorage.clear();
    navigate(`${userRoute.login}`);
  }, [location]);
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return isLoggedIn && currentRole === role ? <Outlet /> : <Navigate to={userRoute.login} />;
};

export default ProtectedRoute;
