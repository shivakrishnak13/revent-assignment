import axios from "axios";
import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const URL = "https://bold-stellar-curio.glitch.me/products";

export const getProducts = (paramobj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URL}`,paramobj)
    .then((res) => {
      console.log(res)
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: PRODUCT_ERROR });
    });
};
