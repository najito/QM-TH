import React, { useState, useEffect } from 'react';
import SearchField from './SearchField.jsx';
import regeneratorRuntime from 'regenerator-runtime';

let count = 0;

const SearchContainer = () => {

  const [terms, setTerms] = useState([]);
  const [qualifiers, setQualifiers] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);

  const newSearch = () => {
    const add = 
    <>
      <input type='button' listid={count} value='X' onClick={(e) => {
        const hold = [...searchTerms]
        if (hold.length > 1) {
          console.log(e.target)
          hold.splice(e.target.listid, 1, <></>)
          setSearchTerms(hold)
        } else {
          reset()
        }
      }}/>
      <SearchField 
      terms={terms}
      setTerms={(x) => setTerms(x)}
      qualifiers={qualifiers} 
      setQualifiers={(x) => {setQualifiers(x)}}
      key={count}
      listid={count}/>
    </>;
      count += 1;

    const hold = [...searchTerms];
    hold.push(add);
    setSearchTerms(hold);
    return add;
  };

  useEffect(()=>{
    newSearch();
  },[]);

  const reset = () => {
    count = 0
    const add = newSearch()
    setSearchTerms([add]);
  };

  const search = () => {
    const statement = `FROM `
  }

  return ( 
      <>
        <div id='searchfields'>
          {searchTerms}
        </div>
        <input type='button' id='select_add' value='And' onClick={() => {
          newSearch()
        }}/>
        <div>
          <input type='button' id='search' value='Search' onClick={() => {() => {
            
          }}}/>
          <input type='button' id='research' value='Reset' onClick={() => {
            reset()
          }}/>
        </div>
      </>
   );
};
 
export default SearchContainer;