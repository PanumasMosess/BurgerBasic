import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerTogle from "../SideDrawer/DrawerTogle/DrawerTogle";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerTogle  clicked={props.drawerTogleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems  isAuthenticaticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
