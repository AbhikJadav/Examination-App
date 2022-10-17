import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logOutUser } from "src/store/actions/auth";
import { useReducerData, useStoreActions } from "src/store/hooks";
import style from "./Header.module.scss";
import { loginTabs, tabs } from "./tabs";

interface TtabArry {
  key: number;
  name: string;
  redirectTo: string;
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useReducerData("auth", "user", "");
  const action = useStoreActions({ logOutUser });
  const tabsArray = user ? loginTabs : tabs;
  const handleLogout = async (tabs: TtabArry) => {
    if (tabs.name === "LOGOUT")
      if (user) {
        navigate("/login");
        localStorage.removeItem("userData");
        await action.logOutUser();
        // logOutUser
      }
    /* eslint-disable no-console */
    // console.log("tabs:", tabs);
  };
  return (
    <div>
      <div className={style.headerContainer}>
        <div className={style.homeTab}>
          <div>Home</div>
        </div>
        <div className={style.tabsContainer}>
          {tabsArray.map((tabs, index) => {
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
                  onClick={() => handleLogout(tabs)}
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
