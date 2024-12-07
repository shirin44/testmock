const PaginationControls = ({ currentPage, totalItems, pageSize, nextPage, prevPage, setPage }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    console.log(totalPages)
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px text-base pt-6 h-10">

                    <li>
                        <a  onClick={prevPage} disabled = {currentPage === 0} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li>
                            <a  key={i} onClick = {() => setPage(i)} className={currentPage ===i ?'active flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700':''}>{i + 1}
                             </a>
                        </li>

                    ))}

                    <li>
                        <a onClick={nextPage} disabled ={currentPage === pageSize - 1} class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginationControls;