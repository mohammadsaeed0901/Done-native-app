import api from "./client";

const register = (pushToken: string) => api.post("/expoPushTokens", { token: pushToken });

export default {
    register,
}