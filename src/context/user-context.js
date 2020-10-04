import React from "react";
import PropTypes from "prop-types";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = React.useState(null);
  return (
    <UserStateContext.Provider value={userInfo}>
      <UserDispatchContext.Provider value={setUserInfo}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

const useUser = () => ({
  userInfo: useUserState(),
  userDispatch: useUserDispatch()
});

UserProvider.propTypes = {
  children: PropTypes.element
};

export { UserProvider, useUser };
