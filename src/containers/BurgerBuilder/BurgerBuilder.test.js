import React from "react";

import { configure, shallow } from "enzyme";
import Adepter from "enzyme-adapter-react-16";

import { BurgerBuilder } from "./BurgerBuilder";
import  BuildControls  from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adepter() });

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BurgerBuilder /> when reciving ingredient", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
