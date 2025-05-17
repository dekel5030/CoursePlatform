import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./NavBar.css";

const courses = [
  { label: "לומיון", href: "#web-dev" },
  { label: "רוויט", href: "#app-dev" },
  { label: "אוטוקד", href: "#cs" },
  { label: "סקצאפ", href: "#cyber" },
  { label: "ריינו", href: "#all-courses" },
];

const students = [
  { label: "חומרים", href: "#web-dev" },
  { label: "ציונים", href: "#app-dev" },
  { label: "מבחנים", href: "#cs" },
  { label: "סיכומים", href: "#cyber" },
];

const navItems = [
  { label: "ראשי", href: "#main" },
  { label: "קורסים", dropdown: courses },
  { label: "סטודנטים", dropdown: students },
  { label: "מי אנחנו", href: "#about" },
  { label: "מה אנחנו נותנים", href: "#offer" },
];

function NavBar() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleLinkClick = (idx) => {
    setActiveTabIdx(idx);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CoursePlatform</div>
      <ul className="navbar-links">
        {navItems.map((item, index) => (
          <li
            className={`navbar-item ${
              index === activeTabIdx ? "selected-tab" : ""
            }`}
            key={index}
            onClick={() => handleLinkClick(index)}
          >
            {item.dropdown ? (
              <DropdownMenu title={item.label} items={item.dropdown} />
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
