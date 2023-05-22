import { Link } from "react-router-dom";
import { SCNotFound } from "./style";

export default function NotFound() {
  return (
    <SCNotFound>
      <h1 className="__number">
        <img src="/not-found.png" alt="" />
      </h1>
      <div className="__text">
        <h2>Ooops...</h2>
        <h4>page not found</h4>
        <Link to="/">Back to home</Link>
      </div>
    </SCNotFound>
  );
}
