import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [encodedToken, setEncodedToken] = useState("");

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      setEncodedToken(encodedToken);
      setUser(JSON.parse(localStorage.getItem("ezBuy-user")));
    }
  }, []);
  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, encodedToken, setEncodedToken, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
