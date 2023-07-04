import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import patientReducer from "../features/patient/patientSlice";
import hospitalAuthReducer from "../features/hospital/hospitalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    patient: patientReducer,
    hospital: hospitalAuthReducer,
  },
});
