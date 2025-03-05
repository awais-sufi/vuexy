// ** Dropdowns Imports
import UserDropdown from "./UserDropdown";
import NotificationDropdown from "./NotificationDropdown";
import { Heart } from "react-feather";

const NavbarUser = () => {
  return (
    <>
    <ul className="nav navbar-nav align-items-center me-auto">
      <UserDropdown />
    </ul>
    <ul className="nav navbar-nav gap-1 align-items-center">
      <NotificationDropdown />
      <Heart></Heart>
      </ul>
      </>
  );
};
export default NavbarUser;
