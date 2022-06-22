import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Navigation from "./components/Layout/Navigation";
import Pages from "./components/Layout/Pages";
import MenuHam from "./components/Layout/MenuHam";
import PagesDashboard from "./components/Layout/Pages_Dashboard";


function App() {
  useEffect(() => {
    const el = document.querySelector("body");

    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX + "px";
      el.style.backgroundPositionY = -e.offsetY + "px";
    });
  });

  const [toggleMenu, setToggleMenu] = useState(false);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };


  return (
    <Fragment>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <Navigation onShow={hamMenu}/>
      <Pages />      
      <PagesDashboard />
    </Fragment>
  );
}

export default App;
