
import styled from "styled-components";
function Search({searchTerm,onSearchChange}){
    return(
        <SearchContainer>
      
        <label htmlFor="search"><h2> Search  User:</h2></label>
        <input
          type="text"
          id="search"
          placeholder="Search a user"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        </SearchContainer>
    )
}
export default Search;

const SearchContainer=styled.div`

& h2{
  margin:1%;
  
  font-family:monospace;
  font-size:230%;
  color:white;
  min-width: 30px;
  float:left;
}
& input{
  border-radius: 5px;
    height: 27px;
    width: 75%;
    padding: 2px 20px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
    margin:1.5%;
    float:right;
    border: none;
}

`