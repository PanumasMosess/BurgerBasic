import React from "react";

import classes from "./BulidControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.lable}
        lable={ctrl.lable}
        added={() => props.inngredientAdded(ctrl.type)}
        removed={() => props.inngredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? 'ORDER NOW' : 'SING UP TO ORDER'}
    </button>
  </div>
);

export default buildControls;
