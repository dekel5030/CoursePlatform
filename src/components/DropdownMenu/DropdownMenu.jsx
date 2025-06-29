import React, { useState } from "react";
import "./DropdownMenu.css";

export default function DropdownMenu({ title, items, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="navbar-item dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <a className="dropdown-header">{title}</a>

      {isOpen && items && items.length > 0 && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
