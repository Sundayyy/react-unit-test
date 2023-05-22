import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "@components/PrivateRoute";
import PublicRoute from "@components/PublicRoute";
import ScrollToTop from "@components/ScrollToTop";
import { useGetProfileQuery } from "@apps/services/authService";
import { useAppSelector } from "@apps/hooks";
import { routeConfig, RouteConfigProps } from "@routes/routes";

function App() {
  const { access_token } = useAppSelector((state) => state.auth);
  const {} = useGetProfileQuery(undefined, { skip: Boolean(!access_token) });

  return (
    <div className="wrapper">
      <ScrollToTop>
        <Routes>
          {routeConfig.map((route: RouteConfigProps) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                route.isProtected ? (
                  <PrivateRoute>
                    <route.component />
                  </PrivateRoute>
                ) : (
                  <PublicRoute>
                    <route.component />
                  </PublicRoute>
                )
              }
            />
          ))}
        </Routes>
      </ScrollToTop>

      <ToastContainer />
    </div>
  );
}

export default App;
