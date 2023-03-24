export function SearchBar(props) {
    function handleChange(event) {
        console.log(event.target)
        props.onChange(event.target);
    }
    return(
        <div>
            <input type="text" name="searchBar" placeholder="Search..." value={props.searchText} onChange={handleChange} />
            <input type="checkbox" id="inStock" name="inStock" checked={props.isStockChecked} onChange={handleChange} />
            <label htmlFor="inStock">Scales</label>
        </div>
    )
}