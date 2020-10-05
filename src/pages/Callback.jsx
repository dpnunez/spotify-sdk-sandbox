import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { fetchClient } from "../services/fetchClient";
import { useUser } from "../context/user-context";

const Callback = ({ location, history }) => {
  const { userDispatch } = useUser();
  console.log(userDispatch);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userInfo = await fetchClient.get("/me");
        userDispatch(userInfo);
      } catch (e) {
        console.log(e);
      }
      history.push("/dashboard");
    };
    console.log("oi");
    if (location.hash) {
      console.log("oi");
      const searchInstance = new URLSearchParams(
        location.hash.replace("#", "?")
      );
      localStorage.setItem(
        "@token-spotify",
        searchInstance.get("access_token")
      );
      console.log(searchInstance.get("access_token"));
      getUserInfo();
    }
  }, [location.hash]);

  return <div>loading</div>;
};

Callback.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default Callback;
