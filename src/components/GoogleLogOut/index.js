import React from "react";
import { GoogleLogout } from "react-google-login";

const GoogleLogOut = () => {
  return <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />;
};

export default GoogleLogOut;
