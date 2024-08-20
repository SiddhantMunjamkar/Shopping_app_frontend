import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <p> this is a product pages</p>
      <Link to="/" className="underline">
        go to Dashboard
      </Link>
    </div>
  );
}
