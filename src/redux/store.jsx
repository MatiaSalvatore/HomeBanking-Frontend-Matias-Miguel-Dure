import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authreducer";

const store = configureStore({
    reducer:{
        auth: authReducer
    },
});

export default store;