import React, { useEffect } from "react";
import { getUserDetails } from "../../api/user";
import Appbar from "../../Components/Appbar";
import { StyledDash } from "./styles";
function Dashboard() {
  useEffect(() => {
    getUserDetails();
  });
  return (
    <>
      <Appbar />

      <StyledDash>
        <div className="contentBox">
          <h3>Dashboard</h3>
        </div>
      </StyledDash>
    </>
  );
}

export default Dashboard;
