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
import UiReducer from "./UiReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
 //whitelist: [], // No persistir ningún estado específico
};
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer, imgAuth: imgChangedReducer, uiFunction:UiReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

})

export let persistor = persistStore(store);