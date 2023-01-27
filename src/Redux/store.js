import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/CartSlices";
import userReducer from "./UserRedux";
import imgChangedReducer from "./UiReducerSlices";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux'
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer, imgAuth: imgChangedReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

})

export let persistor = persistStore(store);