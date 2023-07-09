import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPatient, fetchPatient } from "./patientSlice";
import { getAuthState } from "../auth/authSlice";
import "./PatientProfile.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const PatientProfile = () => {
  const currentPatient = useSelector(getPatient);
  const auth = useSelector(getAuthState);
  const dispatch = useDispatch();
  const getPatientState = async () => {
    try {
      await dispatch(
        fetchPatient({ patientId: auth?.currentUser?.patientId })
      ).unwrap();
    } catch (error) {
      console.log(error?.message);
    }
  };
  if (currentPatient === null) {
    getPatientState();
  }else{
    console.log("patient not null")
  }
  console.log("patient in profile page---->", currentPatient);
  const patientList = currentPatient ? (
    <div className="pat_det_back">
      <section className="avtSection">
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            width: 96,
            height: 96,
            fontWeight: 800,
            fontSize: 50,
            fontFamily: "Merriweather Sans",
          }}
        >
          {currentPatient?.firstName[0]}
        </Avatar>
      </section>
      <h1 className="det_us_name">
        {currentPatient.firstName} {currentPatient.lastName}
      </h1>
      <div className="table_disp_cont">
        <table className="table_disp">
          <tbody>
            <tr>
              <td className="det_tab">
                <strong>{currentPatient.patientId}</strong>
                <br />
                Patient ID{" "}
              </td>
              <td className="det_tab">
                <strong>{currentPatient.dob}</strong>
                <br /> DOB
              </td>
              <td className="det_tab">
                <strong>{currentPatient.age} Yrs</strong>
                <br /> Age
              </td>
              <td className="det_tab">
                <strong>{currentPatient.height} cm</strong>
                <br /> Height
              </td>
            </tr>
            <tr>
              <td className="det_tab">
                <strong>{currentPatient.weight} kg</strong>
                <br /> Weight
              </td>
              <td className="det_tab">
                <strong>{currentPatient.bmi} Kg/cm</strong>
                <br /> BMI
              </td>
              <td className="det_tab">
                <strong>{currentPatient.bloodGroup}</strong>
                <br /> Blood Group
              </td>
              <td className="det_tab">
                <strong>{currentPatient.insurance}</strong>
                <br /> Policy No
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <p>No patient details exist</p>
  );
  return <div>{patientList}</div>;
};

export default PatientProfile;
