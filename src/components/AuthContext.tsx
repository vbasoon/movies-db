import { createContext } from "react";

export const Guest = {
  name: "Guest",
}

export interface AuthInfo {
  user: {
    name: string;
  }
}

export const AuthContext = createContext<AuthInfo>( {user: Guest})