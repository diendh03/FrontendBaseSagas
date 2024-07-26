import { NotFoundPage } from '~/components/common';
import { FreeLayout } from '~/layouts';
import { About, Home, LoginAdmin, LoginUser } from '~/pages';
import { IRouteModel } from '../interface/common';
import { UserMenuNameTransKeyEnum } from '../enum';

// Router && Path
export const adminRoute = {
  base: '/admin',
  login: '/login',
};

export const userRoute = {
  base: '/',
  login: '/login',
  home: 'home',
  about: '/about',
};

export const publicRoutesAdmin = [
  {
    path: '*',
    component: NotFoundPage,
    layout: FreeLayout,
  },
  {
    path: `${adminRoute.base}`,
    component: LoginAdmin,
    layout: FreeLayout,
  },
  {
    path: `${adminRoute.base}${userRoute.login}`,
    component: LoginAdmin,
    layout: FreeLayout,
  },
];

export const publicRoutesUser = [
  {
    path: '*',
    component: NotFoundPage,
    layout: FreeLayout,
  },
  {
    path: `${userRoute.base}${userRoute.login}`,
    component: LoginUser,
    layout: FreeLayout,
  },
];

export const publicRoutes = [...publicRoutesAdmin, ...publicRoutesUser];

export const privateRoutes: IRouteModel[] = [
  {
    index: true,
    path: `${userRoute.base}`,
    component: Home,
    name: UserMenuNameTransKeyEnum.HOME,
  },
  {
    path: `${userRoute.about}`,
    component: About,
    name: UserMenuNameTransKeyEnum.ABOUT,
  },
];
