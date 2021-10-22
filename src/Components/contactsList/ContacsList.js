import React from "react";

import styles from "../contactsList/ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactOperation } from "../../redux/contacts/contacs-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selector";

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loader);
  const error = useSelector((state) => state.contacts.error);

  const filtredContacts = useSelector(getFilteredContacts);

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading ? (
        <h2>...loading</h2>
      ) : (
        <ul className={styles.ul}>
          {filtredContacts.map((item) => (
            <li className={styles.li} key={item.id}>
              <span>{item.contactName}</span>
              <span>{item.contactNumber}</span>
              <button
                type="button"
                onClick={() => dispatch(deleteContactOperation(item.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
