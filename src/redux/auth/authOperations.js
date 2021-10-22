import axios from "axios";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";
import { SIGNUP_URL, SIGNIN_URL } from "../../services/api";

const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });

    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error.response.data.error.message));
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const response = await axios.post(SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });

    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error.response.data.error.message));
  }
};

export { signUpOperation, signInOperation };
