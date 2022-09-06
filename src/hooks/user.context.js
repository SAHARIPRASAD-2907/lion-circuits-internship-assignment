import { createContext, useState } from "react";

export const UserContext = createContext({
  createUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [createUser, setCurrentUser] = useState(null);
  const value = { createUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
