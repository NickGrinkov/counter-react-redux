import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
     counter: counterReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];