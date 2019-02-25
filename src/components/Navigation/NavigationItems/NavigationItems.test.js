import React from "react";

import { configure, shallow } from "enzyme";
import Adepter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adepter() });

describe("<NavigationItems />", () => {
  let warpper;
  beforeEach(() => {
    warpper = shallow(<NavigationItems />);
  });

  it("should render two <NavigitionItem /> elements if not authenticated", () => {
    expect(warpper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NavigitionItem /> elements if authenticated", () => {
    warpper.setProps({isAuthenticaticated: true});
    expect(warpper.find(NavigationItem)).toHaveLength(3);
  });

  it("should an exact Logout button", () => {
    warpper.setProps({isAuthenticaticated: true});
    expect(warpper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });

});
