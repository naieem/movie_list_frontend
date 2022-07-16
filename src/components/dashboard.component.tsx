import { Card } from 'flowbite-react';
import { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { Movie } from '../interfaces/app.interface';
import { IPaginate } from '../interfaces/IPaginate.interface';
import appService from '../services/app.service';
import Pagination from './pagination.component';


export const DashboardComponent = (props: any) => {
    const PageSize = 10;
    const [searchSubs] = useState(new Subject<string>())
    const [searchQuery, setSearchQuery] = useState<string>()
    // pagination related variables
    const [currentPage, setCurrentPage] = useState(1);
    const [currentMovie, setCurrentMovie] = useState<Movie[]>([])
    const [totalMovie, setTotalMovie] = useState<number>(0)

    useEffect(() => {
        const subscription = searchSubs.pipe(
            debounceTime(500)
        ).subscribe((val: string) => {
            setSearchQuery(val)
        })
        return () => {
            subscription.unsubscribe();
        }
    }, [searchSubs])

    useMemo(async () => {
        let payload: IPaginate = { pageNumber: currentPage }
        if (searchQuery)
            payload.search = searchQuery;
        const movies: any = await appService.getAllMovie(payload);
        debugger
        setCurrentMovie(movies.result.data)
        setTotalMovie(movies.result.total)
    }, [currentPage, searchQuery]);

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault()
        searchSubs.next(ev.target.value)
    }
    return (
        <Card>
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search" onKeyUp={handleChange} className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for movies" />
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Poster
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Year
                        </th>
                        <th scope="col" className="py-3 px-6">
                            imdbID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentMovie.map((movie: Movie, index) => {
                        let imageUrl = "https://via.placeholder.com/600x400"; // default
                        if (movie.Poster.length > 0 && movie.Poster !== 'N/A') {
                            imageUrl = movie.Poster;
                        }
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    <img className=" w-32 h-32 rounded-full" src={imageUrl} alt="movie poster" />
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {movie.Title}
                                </th>
                                <td className="py-4 px-6">
                                    {movie.Year}
                                </td>
                                <td className="py-4 px-6">
                                    {movie.imdbID}
                                </td>
                                <td className="py-4 px-6">
                                    {movie.Type}
                                </td>
                                {/* <td className="py-4 px-6">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td> */}
                            </tr>
                        );
                    })}

                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalMovie}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
            />
        </Card>

    )
}
export default DashboardComponent;
// const mapStateToProps = (state: any) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)