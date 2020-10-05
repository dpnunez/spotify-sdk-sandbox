import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { fetchClient } from "../services/fetchClient";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(true);
        const userInfo = await fetchClient.get("/me");
        setUserInfo(userInfo);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    if (localStorage.getItem("@token-spotify")) {
      getUserInfo();
    }
  }, []);

  return (
    <UserStateContext.Provider value={userInfo}>
      <UserDispatchContext.Provider value={setUserInfo}>
        {isLoading ? <div>loading</div> : children}
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
