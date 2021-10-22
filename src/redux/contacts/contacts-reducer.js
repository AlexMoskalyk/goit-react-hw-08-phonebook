import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from "./contacts-actions";

const itemsReducer = createReducer([], {
  [addContactsSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [getContactsSuccess]: (_, action) => action.payload,
  [deleteContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [addContactsError]: (_, action) => action.payload,
  [addContactsRequest]: () => null,

  [getContactsError]: (_, action) => action.payload,
  [getContactsRequest]: () => null,
});

const loaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  loader: loaderReducer,
});
