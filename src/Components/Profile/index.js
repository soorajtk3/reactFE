import React, { useState, useEffect, useRef } from "react";
import userIcon from "../../assets/user-regular.svg";
import { StyledProfile } from "./styles";
import LocalStorageService from "../../utils/LocalStorageService";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const menuItems = ["Profile", "Settings"];
  const imageRef = useRef();
  const menuRef = useRef();

  document.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imageRef.current) {
      setIsProfileClicked(false);
    }
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    LocalStorageService.clearToken();
    navigate("/login");
  };

  return (
    <StyledProfile>
      <img
        ref={imageRef}
        onClick={() => setIsProfileClicked(!isProfileClicked)}
        className="profile"
        src={userIcon}
      />
      {isProfileClicked && (
        <div ref={menuRef} className="profileBox">
          {menuItems.map((item) => (
            <div className="menuItem">{item}</div>
          ))}
          <div onClick={handleLogout} className="menuItem">
            Log out
          </div>
        </div>
      )}
    </StyledProfile>
  );
}

export default Profile;
