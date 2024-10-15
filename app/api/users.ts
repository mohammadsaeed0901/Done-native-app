import { type UserInfo } from "../interfaces/User.interface";
import api from "./client";

const register = (userInfo: UserInfo) => api.post("/users", userInfo);

export default {
    register
};