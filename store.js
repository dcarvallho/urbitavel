import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./slices/counterSlices";

export const store = configureStore({
    reducer: {
        counter: counterSlices,
    },
})