import { Link } from "react-router-dom";
import Logo from "../assets/images/page-not-found.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("PageNotFound");
  return (
    <section className="pageNotFound">
      <h1>404 / Page not Found</h1>
      <img src={Logo} alt="page not found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};
