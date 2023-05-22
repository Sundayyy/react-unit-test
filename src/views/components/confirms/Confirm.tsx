import { Popconfirm } from "antd";

interface ConfirmProps {
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  onConfirm: () => void;
  children: JSX.Element;
}

export default function Confirm({
  title,
  description,
  okText = "Đồng ý",
  cancelText = "Hủy",
  onConfirm,
  children,
}: ConfirmProps) {
  return (
    <Popconfirm
      title={title}
      description={description || ""}
      onConfirm={onConfirm}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Popconfirm>
  );
}
