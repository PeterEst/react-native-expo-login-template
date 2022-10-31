import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import AuthStack from "./AuthStack.js";
import { NavigationContainer } from "@react-navigation/native";
import Loader from "../components/Loader.js";

const AppNav = () => {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
