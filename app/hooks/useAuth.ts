import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { type IUser } from "../interfaces/User.interface";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const login = (authToken: string) => {
        const user = jwtDecode<IUser>(authToken);
        authStorage.storeToken(authToken);
        setUser(user);
    }

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return { user, logout, login };
}

export default useAuth;