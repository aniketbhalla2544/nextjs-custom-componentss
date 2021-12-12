import { useState } from "react";
import data from "./data.json";
import NavItem from "./NavItem";

export default function Navbar() {
  const [navdata, setNavData] = useState(data);
  // console.log(data);

  return (
    <header id="navbar">
      {
        navdata.map((navItemData, index) => {
          return <NavItem key={index} navItemData={navItemData} />
        })
      }
    </header>
  )
}

