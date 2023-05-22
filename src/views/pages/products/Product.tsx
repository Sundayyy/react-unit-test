import { Navigate } from "react-router-dom";

import { usePermission } from "hooks/usePermission";

export default function Product() {
  const [isChecked] = usePermission("list-product");
  if (!isChecked) {
    return <Navigate to="/unauthorized" />;
  }

  if (isChecked) {
    return (
      <div>
        <h1>Product</h1>
      </div>
    );
  }

  return <></>;
}
