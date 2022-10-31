import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import AuthStack from "./AuthStack.js";
import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
