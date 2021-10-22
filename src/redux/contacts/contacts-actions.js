import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsError = createAction("contacts/getContactsError");
//==============================
export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");
//=========================
export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");
//================
export const changeFilter = createAction("contacts/changeFilter");
