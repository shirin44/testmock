import { useEffect } from "react";
import useGridTableLoadData from "./hook/useGetGridTableData";
const GridTable = ({
    RowComponent,
    loadItemApi,
    NewItemPanel,
    Pagination

}) => {
   // const { items, fetchItems ,setItems} = useGridTableLoadData(loadItemApi)
   const { items, fetchItems ,setItems} = useGridTableLoadData(loadItemApi)
    return (
        <>

            <div className="relative overflow-x-auto flex justify-center">
                <table className="text-sm text-center rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Email
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {items && items.length > 0 ?
                            items.map((item, index) => (
                                <RowComponent item={item} key={index} reloadFunction={fetchItems} />
                            )) : (<p>No items available</p>)}

                    </tbody>
                </table>


            </div>
            <Pagination setItems={setItems} />
        </>
    );
};

export default GridTable;
