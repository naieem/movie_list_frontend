import axios from 'axios';

const UserAxios = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});
UserAxios.interceptors.response.use(
    response => {
        
        return response.data
    },
    error => {
        
        if (error.response.data.result.statusCode === 401) {
            window.location.href = '/login';
        }
    });
export default UserAxios;