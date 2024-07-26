import { IRouteModel } from './interface/common';

/**
 * Checks if a route has an active child route based on the provided location.pathname.
 * @param route The route object to check.
 * @param locationPathname The pathname of the current location.
 * @returns True if the route has an active child route, false otherwise.
 */
export const hasActiveChild = (route: IRouteModel, locationPathname: string): boolean => {
  return (
    route.children?.some((child) => child.path === locationPathname || hasActiveChild(child, locationPathname)) ?? false
  );
};

export const getInitialsName = (firstName?: string, lastName?: string) => {
  if (!firstName && !lastName) return '';

  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();

  if (firstName && !lastName) {
    return `${firstInitial}`;
  }

  if (lastName && !firstName) {
    return `${lastInitial}`;
  }

  return `${firstInitial}${lastInitial}`;
};
