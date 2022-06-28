import React, { useCallback, useEffect, useState } from "react";

import NavMobil from "../UI/NavMobil";
import MenuStandard from "./MenuStandard";

const Navigation = (props) => {
  const [icon, setIcon] = useState("noshow");

  const handleWindowSize = useCallback(() => {
    window.innerWidth >= 700 ? setIcon(false) : setIcon(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 700) {
      setIcon(false);
    } else {
      setIcon(true);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  return (
    <div>
      <div>
        {icon === "noshow" ? (
          ""
        ) : icon ? (
          <NavMobil onShow={props.onShow} />
        ) : (
          <MenuStandard />
        )}
      </div>
    </div>
  );
};

export default Navigation;
