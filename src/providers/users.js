import api from '../config/api'

export const SearchProvider = async(username) => {
    try {
        const users = await api.get(`/users/${username}`);
        if (users.status === 200) {
            return users;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}

export const LoadReposProvider = async(username) => {
    try {
        const repos = await api.get(`/users/${username}/repos`);
        if (repos.status === 200) {
            return repos;

        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}

export const LoadStarredProvider = async(username) => {
    try {
        const starred = await api.get(`/users/${username}/starred`);
        if (starred.status === 200) {
            return starred;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }
}
