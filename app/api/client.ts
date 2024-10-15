import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const api = create({
    baseURL: settings.apiUrl,
});

api.addAsyncRequestTransform(async (request) => {
    const token = await authStorage.getToken();
    if (!token) return;
    if (request.headers) request.headers["x-auth-token"] = token;
})

const get = api.get;
api.get = async (url , params, axiosConfig) => {
    const response = await get(url , params, axiosConfig);

    if (response.ok) {
        cache.store(url, response?.data);
        return response;
    }

    const data = await cache.get(url);

    return data ? { ok: true, data } : response;
}

export default api;