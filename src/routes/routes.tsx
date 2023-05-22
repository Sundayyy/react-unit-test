import { lazy, LazyExoticComponent } from "react";
import {
  GoldOutlined,
  OrderedListOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

export interface RouteConfigProps {
  id: string;
  name: string;
  icon?: JSX.Element;
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  isProtected: boolean;
  isMenu: boolean;
  permission?: string;
}

export const routeConfig: RouteConfigProps[] = [
  {
    id: "LoginPage",
    name: "Đăng nhập",
    // icon: "",
    path: "/login",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "@pages/login/LoginPage"),
    ),
    isProtected: false,
    isMenu: false,
  },
  {
    id: "HomePage",
    name: "Trang chủ",
    // icon: "",
    path: "/",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "@pages/home/HomePage"),
    ),
    isProtected: true,
    isMenu: false,
  },
  {
    id: "ListProductCategoriesPage",
    name: "Quản lý danh mục sản phẩm",
    icon: <OrderedListOutlined />,
    path: "/product-categories",
    component: lazy(
      () =>
        import(
          /* webpackPrefetch: true */ "@pages/product_categories/ProductCategories"
        ),
    ),
    isProtected: true,
    isMenu: true,
    permission: "list-product-category",
  },
  {
    id: "ListProductPage",
    name: "Quản lý sản phẩm",
    icon: <GoldOutlined />,
    path: "/products",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "@pages/products/Product"),
    ),
    isProtected: true,
    isMenu: true,
    permission: "list-product",
  },
  {
    id: "ProductDetailPage",
    name: "Chi tiết sản phẩm",
    // icon: "",
    path: "/products/:productId",
    component: lazy(
      () =>
        import(
          /* webpackPrefetch: true */ "@pages/product_detail/ProductDetail"
        ),
    ),
    isProtected: true,
    isMenu: false,
    permission: "update-product",
  },
  {
    id: "PostCategoriesPage",
    name: "Danh mục bài viết",
    icon: <ProfileOutlined />,
    path: "/post-categories",
    component: lazy(
      () =>
        import(
          /* webpackPrefetch: true */ "@pages/post_categories/PostCategories"
        ),
    ),
    isProtected: true,
    isMenu: true,
    permission: "list-post",
  },
  {
    id: "NotFoundPage",
    name: "Not Found",
    // icon: "",
    path: "/*",
    component: lazy(
      () => import(/* webpackPrefetch: true */ "@pages/not_found/NotFound"),
    ),
    isProtected: false,
    isMenu: false,
  },
  {
    id: "Unauthorized",
    name: "Unauthorized",
    // icon: "",
    path: "/unauthorized",
    component: lazy(
      () =>
        import(
          /* webpackPrefetch: true */ "@pages/authorization/Authorization"
        ),
    ),
    isProtected: false,
    isMenu: false,
  },
];
