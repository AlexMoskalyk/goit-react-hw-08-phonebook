import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signOutError,
  signOutRequest,
  signOutSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

const authUserReducer = createReducer(null, {
  [signUpSuccess]: (_, action) => ({
    displayName: action.payload.displayName,
    email: action.payload.email,
  }),
  [signInSuccess]: (_, action) => ({
    displayName: action.payload.displayName,
    email: action.payload.email,
  }),
  [signOutSuccess]: () => null,
});

const authTokensReducer = createReducer(null, {
  [signUpSuccess]: (_, action) => ({
    idToken: action.payload.idToken,
    refreshToken: action.payload.refreshToken,
    localId: action.payload.localId,
  }),
  [signInSuccess]: (_, action) => ({
    idToken: action.payload.idToken,
    refreshToken: action.payload.refreshToken,
    localId: action.payload.localId,
  }),
  [signOutSuccess]: () => null,
});

const authLoaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
  
});

const authErrorReducer = createReducer("", {
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
  [signOutError]: (_, action) => action.payload,
  [signOutSuccess]: () => "",
});

export const authReducer = combineReducers({
  user: authUserReducer,
  tokens: authTokensReducer,
  isLoading: authLoaderReducer,
  error: authErrorReducer,
});
