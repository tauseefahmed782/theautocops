import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const loginHandeler = (boolean) => {
    setIsLoggedIn(boolean);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, loginHandeler }}>
      {children}
    </LoginContext.Provider>
  );
};
