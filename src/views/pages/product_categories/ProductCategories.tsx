import { Navigate } from "react-router-dom";
import { usePermission } from "hooks/usePermission";

export default function ProductCategories() {
  const [isChecked] = usePermission("list-product-category");
  if (!isChecked) {
    return <Navigate to="/unauthorized" />;
  }

  if (isChecked) {
    return (
      <div>
        <h1>ProductCategories</h1>
      </div>
    );
  }

  return <></>;
}
