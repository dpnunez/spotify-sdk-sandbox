import React from "react";
import { useUser } from "./context/user-context";

const App = () => {
  const { userInfo } = useUser();

  console.log(userInfo);

  return <div></div>;
};

export default App;
