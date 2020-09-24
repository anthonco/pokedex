import React, { useState }  from 'react'

type PKSearchProps = {
  name: string
  response: any
}

function _onChange(e: React.ChangeEvent) {
  const value = (e.target as HTMLInputElement).value
  console.log("clicked",value)
}

const PKSearch:React.FC<PKSearchProps> = ({ name, response }) => {
  
  // name is string!
  response("2")

  return (
  <div>
    <h1>Hello {name}</h1>
    <input
      className="react-search-field-input"
      onChange={_onChange}
      placeholder="Search"
      type="text"
      value={"hello"}
    />
  </div>
  )
};

export default PKSearch