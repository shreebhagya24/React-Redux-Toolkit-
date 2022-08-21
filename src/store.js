import { configureStore } from "@reduxjs/toolkit";
import { changeTheNumber } from "./reducers/incDec";

const store = 
configureStore({
    reducer : {
      custom:changeTheNumber,
    }
  })

export default store;
