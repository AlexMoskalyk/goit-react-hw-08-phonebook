import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-reducer";
import { authReducer } from "./auth/auth-reducers";

const authConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user", "tokens"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  authorization: persistReducer(authConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const data = { store, persistor };

export default data;
