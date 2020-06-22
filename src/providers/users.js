import api from '../config/api'

export const SearchProvider = async(username) => {
    const users = await api.get(`/users/${username}`);
    try {
        if (users.status === 200) {
            return users;
        } else {
            return false;
        }
    } catch (error) {
        return error;
    }


}
