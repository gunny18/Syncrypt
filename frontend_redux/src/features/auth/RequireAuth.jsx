import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getAuthState } from "./authSlice";
import { useSelector } from "react-redux";
import { getPatient } from "../patient/patientSlice";

const RequireAuth = () => {
  const auth = useSelector(getAuthState);
  const patient = useSelector(getPatient);
  const location = useLocation();
  console.log("auth state--->", auth);
  console.log("patient state--->",patient);
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
