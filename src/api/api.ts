import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = '4d083553-cac7-4ff8-a958-b1da053def74';

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        'API-KEY': API_KEY,
    }
})

export const getUsers = (pageSize: number, currentPage: number) => {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data);
}

export const getUserProfile = (userID: string) => {
    return instance.get(`profile/${userID}`)
        .then(response => response.data);
}

export const auth = () => {
    return instance.get(`auth/me`)
        .then(response => response.data);
}