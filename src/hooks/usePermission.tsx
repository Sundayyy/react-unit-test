import { checkPermission } from "@utils/checkPermission";
import { useAppSelector } from "@apps/hooks";

export const usePermission = (initialValue: string) => {
  const { userProfile } = useAppSelector((state) => state.auth);

  const authorization =
    userProfile?.permissions &&
    checkPermission({
      permissions: userProfile?.permissions || [],
      item: initialValue,
    });
  return [authorization];
};
