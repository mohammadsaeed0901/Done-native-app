import React from "react";
import { type IUser } from "../interfaces/User.interface";

type AuthPropTypes = {
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,
}

const AuthDefaultValues: AuthPropTypes = {
    user: null,
    setUser: () => {}
}

const AuthContext = React.createContext(AuthDefaultValues);

export default AuthContext;