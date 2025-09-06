import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/pricing"}>Pricing</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
