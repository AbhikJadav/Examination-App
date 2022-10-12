import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { tabs } from "./tabs";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <div className={style.headerContainer}>
        <div className={style.homeTab}>
          <div>Home</div>
        </div>
        <div className={style.tabsContainer}>
          {tabs.map((tabs, index) => {
            return (
              <>
                <NavLink
                  to={tabs.redirectTo}
                  className={
                    location.pathname === tabs.redirectTo
                      ? style.activeTab
                      : style.tabs
                  }
                  key={index}
                >
                  <div className={style.tabs}> {tabs.name}</div>
                </NavLink>
                <div className={style.vl}> </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
