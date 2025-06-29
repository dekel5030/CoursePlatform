import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useNavigate, useLocation } from "react-router-dom";
import { mainNavItems } from "../../data/navigationMenu.js";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTabIdx = mainNavItems.findIndex(
    (item) => item.link && location.pathname === item.link
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">CoursePlatform</div>
      <ul className="navbar-links">
        {mainNavItems.map((item, index) => (
          <li
            className={`navbar-item ${
              index === activeTabIdx ? "selected-tab" : ""
            }`}
            key={index}
          >
            <DropdownMenu
              title={item.label}
              items={item.dropdown}
              onClick={() => {
                if (item.link) {
                  navigate(item.link);
                }
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
