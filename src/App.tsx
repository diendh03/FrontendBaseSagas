import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './utils/constants/route';
import { ProtectedRoute } from './components/common';
import { MainLayout } from './layouts';
import { RolesEnum } from './utils/enum';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        <Route>
          <Route element={<MainLayout />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component || '';

              return (
                <Route key={index} path={route.path} element={<Page />}>
                  {route.children &&
                    route.children.length > 0 &&
                    route.children.map((childRoute, index) => {
                      const ChildComponent = childRoute.component;

                      return (
                        <Route key={index} path={childRoute.path} element={<ChildComponent />}>
                          {childRoute.children &&
                            childRoute.children.length > 0 &&
                            childRoute.children.map((nestedRoute, index) => {
                              const ChildComponent = nestedRoute.component || '';

                              return (
                                <Route
                                  key={index}
                                  index={nestedRoute.index}
                                  path={nestedRoute.path}
                                  element={<ChildComponent />}
                                />
                              );
                            })}
                        </Route>
                      );
                    })}
                </Route>
              );
            })}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
