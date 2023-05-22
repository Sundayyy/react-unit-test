import { Suspense } from "react";
// import { Navigate, useLocation } from "react-router-dom";

// import { useAppSelector } from "@apps/hooks";

function PublicRoute({ children }: { children: JSX.Element }) {
  // const location = useLocation();

  // const { access_token } = useAppSelector((state) => state.auth);
  // if (access_token) {
  //   return <Navigate to={location?.state?.from || "/"} replace />;
  // }

  return (
    <Suspense fallback={null}>
      <main className="main-content">{children}</main>
    </Suspense>
  );
}

export default PublicRoute;
