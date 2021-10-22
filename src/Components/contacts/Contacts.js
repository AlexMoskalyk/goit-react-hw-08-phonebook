import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactsOperation } from "../../redux/contacts/contacs-operations";

import Filter from "../filter/Filter";
import Form from "../form/Form";
import styles from "./Contacts.module.css";
import ContactList from "../contactsList/ContacsList";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
