import axios from "axios";
import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const URL = "https://bold-stellar-curio.glitch.me/products";

export const getProducts = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${URL}`)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};
