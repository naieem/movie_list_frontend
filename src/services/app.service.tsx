import axios from "../api/axios";
import { IMovie, Movie } from "../interfaces/app.interface";
import { IPaginate } from "../interfaces/IPaginate.interface";

class AppService implements IMovie {
    async getAllMovie(payload: IPaginate): Promise<Movie[]> {
        return new Promise((resolve, reject) => {
            axios.post('/movies/list', payload).then((response: any) => {
                debugger
                resolve(response?.data || response)
            }).catch((err: any) => {
                debugger
                reject(err)
            })
        })
    }
}
export default new AppService();