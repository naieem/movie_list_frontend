import axios from "../api/axios";
import { IMovie, Movie } from "../interfaces/app.interface";

class AppService implements IMovie {
    async getAllMovie(): Promise<Movie[]> {
        return new Promise((resolve, reject) => {
            axios.get('/movies/list').then((response: any) => {
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