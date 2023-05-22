import { useMemo } from "react";
import { Link } from "react-router-dom";

import { routeConfig, RouteConfigProps } from "@routes/routes";
import { SCNavbar } from "./style";
import { useAppSelector } from "@apps/hooks";
import { Skeleton } from "antd";

interface NavbarProps {
  pathName: string;
}

export default function Navbar({ pathName }: NavbarProps) {
  const { userProfile } = useAppSelector((state) => state.auth);
  const menuList: RouteConfigProps[] = useMemo(() => {
    if (userProfile?.permissions && userProfile?.permissions.length > 0) {
      if (userProfile?.permissions.some((item) => item.name === "all")) {
        return routeConfig.filter((item) => item.isMenu);
      } else {
        return routeConfig.filter((route) =>
          userProfile?.permissions.some(
            (item) => route.permission === item.name && route.isMenu,
          ),
        );
      }
    } else {
      return routeConfig.filter((route) => !route.isProtected && route.isMenu);
    }
  }, [userProfile?.permissions]);

  return (
    <SCNavbar>
      <ul>
        {menuList.length > 0 ? (
          menuList.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className={pathName === menu.path ? "active" : ""}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </Link>
            </li>
          ))
        ) : (
          <Skeleton active />
        )}
      </ul>
    </SCNavbar>
  );
}
