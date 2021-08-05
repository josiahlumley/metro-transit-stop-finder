import { configureStore } from "@reduxjs/toolkit";
import transitReducer from "./transitSlice";

export default configureStore({
  reducer: {
    transit: transitReducer
  }
});
