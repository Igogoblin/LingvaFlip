import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

export default configureStore({
    reducer: {
        cards:cardSlice,
    }
});