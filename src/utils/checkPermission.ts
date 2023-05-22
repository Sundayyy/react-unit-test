import { PermissonProps } from "@globalTypes/globalTypes";

interface CheckPermissionProps {
  permissions: PermissonProps[];
  item: string;
}
export const checkPermission = ({
  permissions,
  item,
}: CheckPermissionProps) => {
  return (
    permissions.some((per) => per.name === "all") ||
    permissions.some((per) => per.name === item)
  );
};
