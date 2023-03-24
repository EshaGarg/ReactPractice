import React, {useState, useCallback} from 'react';
import { ProductTable } from '../ProductTable/ProductTable';
import { SearchBar } from '../SearchBar/SearchBar';

export function FilterableProductTable(props) {
    const PRODUCTS = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ];
    const [searchText, setSearchText] = useState("");
    const [inStockChecked, setInStockChecked] = useState(false);

    const handleChange = useCallback((newValue) => {
        newValue.name == "searchBar" ? setSearchText(newValue.value) : setInStockChecked(newValue.checked)
     }, []);

    return(
        <div>
            <SearchBar searchText={searchText} isStockChecked={inStockChecked} onChange={handleChange} />
            <ProductTable products={PRODUCTS} />
        </div>
    )
}