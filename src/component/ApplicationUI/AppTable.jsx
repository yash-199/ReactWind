import React from 'react'
import PriceComp from '../../Table/PriceComp'
import PriceCompwithBtBtn from '../../Table/PriceCompwithBtBtn'
import EcommTable from '../../Table/EcommTable'
import FilterTable from '../../Table/FilterTable'
import TableWithSortingSearch from '../../Table/TableWithSortingSearch'

const AppTable = () => {
    return (
        <div className="px-6 py-2 text-white">
            <p className='text-white text-4xl'>Table</p>
            <PriceComp />
            <PriceCompwithBtBtn />
            <EcommTable />
            <FilterTable />
            <TableWithSortingSearch />
        </div>
    )
}

export default AppTable