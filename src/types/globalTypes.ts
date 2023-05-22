export type PermissonProps = {
  id: number;
  name: string;
};

export type UserProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  permissions: PermissonProps[];
};

export type AuthProps = {
  userProfile: null | UserProps;
  user?: null | UserProps;
  access_token: null | string;
  refresh_token: null | string;
};

export type ResponseProps<T> = {
  data: T;
  message: string;
  statusCode: number;
};

export interface ProductCategoryProps {
  id: number;
  name: string;
}

export interface FormValueProps {
  values: { name: string };
}

export interface ErrorProps {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface PayloadLoginProps {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ParentsProps {
  label: string;
  path: string;
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface AppBreadcrumbProps {
  pageName: string;
  parents?: ParentsProps[];
}

export interface PaginationProps {
  page: number;
  total: number | undefined;
  onChangePage: (page: number, pageSize: number) => void;
}

export interface HeaderPageProps {
  pageName: string;
  onSearch: (value: string) => void;
  openModalStore: () => void;
}

export interface DataListLayoutType
  extends ChildrenProps,
    AppBreadcrumbProps,
    PaginationProps,
    HeaderPageProps {}
