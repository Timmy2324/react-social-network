import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const API_KEY = '642ef21e-b6f0-4355-8bfb-f882a3b3360e';

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        'API-KEY': API_KEY,
    }
})

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },
    getUserProfile(userID: string) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data);
    },
    follow(userID: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`);
    },
    unFollow(userID: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`);
    },
}

export const auth = () => {
    return instance.get(`auth/me`)
        .then(response => response.data);
}