import ReactDOM from "react-dom";
import { Spin } from "antd";

import { SCLoading } from "./style";

interface LoadingProps {
  isLoading?: boolean;
}

export default function Loading({ isLoading = true }: LoadingProps) {
  return ReactDOM.createPortal(
    <SCLoading>
      <Spin spinning={isLoading} />
    </SCLoading>,
    document.body,
  );
}
