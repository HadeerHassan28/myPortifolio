import NavLinks from "./NavLinks";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Hadeer's Logo"
        width={200}
        // height={100}
      />
      <NavLinks />
    </header>
  );
};

export default Header;
