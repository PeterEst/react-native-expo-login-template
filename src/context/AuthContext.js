import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
