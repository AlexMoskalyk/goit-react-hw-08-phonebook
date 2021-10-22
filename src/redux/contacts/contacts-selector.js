import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return (
      items &&
      items.filter((item) =>
        item.contactName.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
);
