import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { SCAuthorization } from "./style";

export default function Authorization() {
  return (
    <SCAuthorization>
      <h1 className="__number">
        <img src="/not-found.png" alt="" />
      </h1>
      <div className="__text">
        <h2>Ooops...</h2>
        <h4>you do not have access</h4>
        <Link to="/">
          <ArrowLeftOutlined />
          <span className="__link_text">Back to home</span>
        </Link>
      </div>
    </SCAuthorization>
  );
}
