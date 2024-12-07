import usePagination from "./hook/usePagination"
import PaginationControls from "./child_component/paginationControl";
import showByPage from "./api/showByPage";
const Pagination = ({setItems}) => {
    const pageSize = 4
    const {currentPage,nextPage,prevPage,setPage, totalItems} = usePagination({
        fetchData: showByPage,
        pageSize,setItems});
        
    console.log({
        currentPage: currentPage,
        totalItems: totalItems
    })
    return (
        <PaginationControls
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize ={pageSize}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
            />
    )
}

export default Pagination