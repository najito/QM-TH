import React, { useState } from 'react';

const SearchField = ({terms, setTerms, qualifiers, setQualifiers, listid}) => {

  const [thisTerm, setThisTerm] = useState('Domain');
  const [thisQualifier, setThisQualifier] = useState('equals');

  const integerTerm = ['Screen Width', 'Screen Height', '# of Visits', 'Page Response Time(ms)']

  return ( 
    <div>
      <select
      className='terms' 
      defaultValue='User Email'
      onChange={(e) => {
        const hold = [...terms]
        hold[listid] = e.target.value;
        setThisTerm(hold[listid])
        setTerms(hold)
      }}>
        <option value='User Email'>User Email</option>
        <option value='Screen Width'>Screen Width</option>
        <option value='Screen Height'>Screen Height</option>
        <option value='# of Visits'># of Visits</option>
        <option value='First Name'>First Name</option>
        <option value='Last Name'>Last Name</option>
        <option value='Page Response Time(ms)'>Page Response Time(ms)</option>
        <option value='Domain'>Domain</option>
        <option value='Page Path'>Page Path</option>
      </select>
      {integerTerm.includes(thisTerm) && 
      <>
        <div>is</div>
        <select 
        className='selector' 
        onChange={(e)=> {
          const hold = [...qualifiers]
          hold[listid] = e.target.value;
          setThisQualifier(hold[listid])
          setQualifiers(hold)
        }}>
          <option value='equals'>equals</option>
          <option value='between'>between</option>
          <option value='greater than'>greater than</option>
          <option value='less than'>less than</option>
          <option value='in list'>in list</option>
        </select>
        {thisQualifier === 'between' &&
        <>
          <input type='text' placeholder='0'/>
          <div>and</div>
          <input type='text' placeholder='0'/>
        </>
        }
        {thisQualifier !== 'between' &&
        <input type='text' placeholder='0'/>}
      </>
      } 
      {!integerTerm.includes(thisTerm) && 
      <>
        <select className='selector'>
          <option value='equals'>equals</option>
          <option value='contains'>contains</option>
          <option value='starts with'>starts with</option>
          <option value='in list'>in list</option>
        </select>
        <input type='text' placeholder='website.com'/>
      </>
      }
      
    </div>
   );
}
 
export default SearchField;