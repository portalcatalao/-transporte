import axios from "axios";
import { parseCookies } from "nookies";

export function getApi(ctx?: any) {
    const { 'transduarte.token': token } = parseCookies(ctx);
    const api = axios.create({
        baseURL: 'https://app.transduartego.com.br/'
    })
    if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;
    return api;
}
export const api = getApi();