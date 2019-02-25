import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredient = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-a2ce1.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredient(response.data));
      })
      .catch(err => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
