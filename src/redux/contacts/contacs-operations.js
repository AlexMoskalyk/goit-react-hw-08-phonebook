import axios from "axios";
import { BASE_URL } from "../../services/api";

import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./contacts-actions";

const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactsRequest());
  try {
    const response = await axios.post(`${BASE_URL}contacts.json`, contact);

    dispatch(addContactsSuccess({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

const getContactsOperation = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(`${BASE_URL}contacts.json`);
    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSuccess(contacts));
    }
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`${BASE_URL}contacts/${id}.json`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

export { addContactOperation, getContactsOperation, deleteContactOperation };
