function Search({searchTerm,onSearchChange}){
    return(
        <>
        <h1>search</h1>
        <label htmlFor="search"><h2>Search:</h2></label>
        <input
          type="text"
          id="search"
          placeholder="Search a user"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        </>
    )
}
export default Search;