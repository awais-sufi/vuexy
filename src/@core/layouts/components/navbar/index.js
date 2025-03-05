// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import NavbarUser from "./NavbarUser";

// ** Third Party Components
import { Sun, Moon, Menu } from "react-feather";

// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap";

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="navbar-nav d-xl-none">
          
        </ul>
        <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
           
          </NavLink>
        </NavItem>
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  );
};

export default ThemeNavbar;
