import api from "./client";

const login = (email: string, password: string) => api.post("/auth", { email, password });

export default {
    login
}