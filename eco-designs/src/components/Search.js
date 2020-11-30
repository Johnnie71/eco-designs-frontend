import React from 'react'


function Search(props){
    return <form>
            <input placeholder="Search User" value={props.searchValue} onChange={props.searchHandler} />
           </form>
}

export default Search