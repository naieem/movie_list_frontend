import axios from "../api/axios";
import { IAuth, IloginPayload } from "../interfaces/auth.interface";

class AuthService implements IAuth {
    async login(payload: IloginPayload): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post('/auth/login', payload).then((response: any) => {
                
                resolve(response?.data || response)
            }).catch((err: any) => {
                
                reject(err)
            })
        })
    }
    async getLoggedInUserInfo(): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get('/auth/me').then((response: any) => {
                
                resolve(response?.data || response)
            }).catch((error: any) => {
                
                reject(error)
            })
        })
    }
}
export default new AuthService();