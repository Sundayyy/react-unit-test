import { Suspense, useMemo } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  KeyOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import { logout } from "@apps/slices/authSlice";
import { saveAccessToken, saveRefreshToken } from "@utils/localStorage";
import { useAppDispatch, useAppSelector } from "@apps/hooks";
import Navbar from "./navbar/Navbar";
import Confirm from "./confirms/Confirm";
import Loading from "./loading/Loading";
import { SCPrivateRoute } from "./style";

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const appDispatch = useAppDispatch();
  const { access_token, userProfile } = useAppSelector((state) => state.auth);

  const location = useLocation();
  const getPathName = useMemo(() => {
    return (
      "/" +
      location.pathname.split("/", 2)[
        location.pathname.split("/", 2).length - 1
      ]
    );
  }, [location.pathname]);

  const handleLogout = () => {
    appDispatch(logout());
    saveAccessToken("");
    saveRefreshToken("");
  };

  if (!access_token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return (
    <SCPrivateRoute>
      <header>
        <div className="__logo">
          <Link to="/">
            <img src="/logo-color.png" alt="logo" />
          </Link>
        </div>
        <div className="__menu">
          <div className="__username">
            Xin chào, <b>{userProfile?.name}</b>
          </div>
          <div className="__sub_menu">
            <Link to="/profile">
              <ProfileOutlined />
              <span>Thông tin cá nhân</span>
            </Link>
            <Link to="/change-pasword">
              <KeyOutlined />
              <span>Đổi mật khẩu</span>
            </Link>
            <Link to="">
              <Confirm
                title="Đăng xuất"
                description="Bạn có muốn đăng xuất khỏi hệ thống?"
                onConfirm={handleLogout}
              >
                <>
                  <LogoutOutlined />
                  <span>Đăng xuất</span>
                </>
              </Confirm>
            </Link>
          </div>
        </div>
      </header>

      <div className="__layout_content">
        <Navbar pathName={getPathName} />

        <main className="main_content">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </div>
    </SCPrivateRoute>
  );
}

export default PrivateRoute;
