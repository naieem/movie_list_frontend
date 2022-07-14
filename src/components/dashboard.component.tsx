import { Card } from 'flowbite-react';
import React, { useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Movie } from '../interfaces/app.interface';
import appService from '../services/app.service';
import Pagination from './pagination.component';

const PageSize = 10;
export const DashboardComponent = (props: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [movielist, setMovies] = useState<Movie[]>([])
    const [currentMovie, setCurrentMovie] = useState<Movie[]>([])

    useMemo(async () => {
        const movies: any = await appService.getAllMovie();
        debugger
        setMovies(movies.result)
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        setCurrentMovie(movies.result.slice(firstPageIndex, lastPageIndex));
    }, [currentPage]) as any;
    return (
        <Card>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
                        {/* <th scope="col" className="py-3 px-6">
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {currentMovie.map((movie: Movie, index) => {
                        return (
                            <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                totalCount={movielist.length}
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