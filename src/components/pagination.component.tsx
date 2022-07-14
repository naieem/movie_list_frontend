/* eslint-disable jsx-a11y/anchor-is-valid */
import { usePagination, DOTS } from '../hooks/usePagination';
const Pagination = (props: any) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <nav aria-label="navigation">
            <ul className="inline-flex -space-x-px">
                {currentPage > 1 &&
                    <li onClick={onPrevious}>
                        <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                }
                {paginationRange.map((pageNumber: any, index: number) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li key={index}>
                                <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&#8230;</a>
                            </li>)
                    }

                    return (
                        <li key={index} onClick={() => onPageChange(pageNumber)}>
                            <a href="#" className={`py-2 px-3 ${pageNumber === currentPage ? "text-blue-600 bg-blue-50 " : ""} leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{pageNumber}</a>
                        </li>
                    );
                })}
                {currentPage !== lastPage &&
                    <li onClick={onNext}>
                        <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>}

            </ul>
        </nav>
    );
};

export default Pagination;
