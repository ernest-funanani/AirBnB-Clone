import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../Actions/ModalAction";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };
  return (
    <div className="header">
      <img
        src="data:image/png;base64,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"
        className="header_logo"
        alt="logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />

        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span>Log out</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={openModalHandle}>Log In</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
