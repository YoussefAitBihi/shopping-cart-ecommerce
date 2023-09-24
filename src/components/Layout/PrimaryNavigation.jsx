import { useState } from "react";
import { NavLink } from "react-router-dom";
import FormSearch from "../Forms/FormSearch";
import HamburgerIcon from "../UI/HamburgerIcon";

const PrimaryNavigation = () => {
  const [isNavigationShown, setIsNavigationShown] = useState(false);

  const handleOpenCloseNavigation = () => {
    setIsNavigationShown((prevNavigationState) => !prevNavigationState);
  };

  const handleActiveLink = ({ isActive }) =>
    `primary-navigation__link ${
      isActive ? "primary-navigation__link--active" : ""
    }`;

  return (
    <>
      <HamburgerIcon
        onClick={handleOpenCloseNavigation}
        navigationState={isNavigationShown}
      />
      <nav
        className="primary-navigation"
        id="main-nav"
        aria-label="Main Navigation"
        onClick={handleOpenCloseNavigation}
      >
        <ul
          className="primary-navigation__list"
          onClick={(event) => event.stopPropagation()}
        >
          <li className="primary-navigation__item">
            <NavLink to="" className={handleActiveLink} end>
              Home
            </NavLink>
          </li>
          <li className="primary-navigation__item">
            <NavLink to="sneakers" className={handleActiveLink} end>
              Sneakers
            </NavLink>
          </li>
          <li className="primary-navigation__item">
            <FormSearch />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PrimaryNavigation;
