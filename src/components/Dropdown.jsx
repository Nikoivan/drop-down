import { useState } from "react";
import DropdownList from "./DropdownList";
import "./css/dropdown.css";

export default function Dropdown() {
  const [menuState, setMenuState] = useState(false);
  const menuList = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  return (
    <>
      <div
        className="btn-wrap"
        onClick={() => (!menuState ? setMenuState(true) : setMenuState(false))}
      >
        <span className="btn-text">account settings</span>
      </div>
      {menuState && <DropdownList list={menuList} />}
    </>
  );
}
