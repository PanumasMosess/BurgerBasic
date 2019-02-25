import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const perchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const perchaseStart = (state, action) => {
  return updateObject(state, { purchased: true });
};

const perchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const perchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrderStart_ = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrderSuccess_ = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrderFail_ = (state, action) => {
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PURCHASE_INIT:
      return perchaseInit(state, action);
    case actionType.PURCHASE_BURGER_START:
      return perchaseStart(state, action);
    case actionType.PURCHASE_BURGER_SUCCESS:
      return perchaseBurgerSuccess(state, action);
    case actionType.PURCHASE_BURGER_FAIL:
      return perchaseBurgerFail(state, action);
    case actionType.FETCH_ORDER_START:
      return fetchOrderStart_(state, action);
    case actionType.FETCH_ORDER_SUCCESS:
      return fetchOrderSuccess_(state, action);
    case actionType.FETCH_ORDER_FAIL:
      return fetchOrderFail_(state, action);
    default:
      return state;
  }
};

export default reducer;
