import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
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
  { label: "ראשי", link: "/" },
  { label: "קורסים מקצועיים", link: "/courses", dropdown: courses },
  { label: "קורסים אונליין", dropdown: courses },
  { label: "סטודנטים", dropdown: students },
  { label: "אודות", href: "#about" },
  { label: "יצירת קשר", href: "#about" },
];

function NavBar() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const navigate = useNavigate();

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
            <DropdownMenu
              title={item.label}
              items={item.dropdown}
              onClick={() => navigate(item.link)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
