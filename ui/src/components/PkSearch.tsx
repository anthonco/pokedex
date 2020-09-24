import React, { useState }  from 'react'

type PKSearchProps = {
  response: any
}

const PKSearch:React.FC<PKSearchProps> = ({ response }) => {

  console.log("PKSearch component")

  const [searchVal, setSearchValue] = React.useState("")

  function _onChange(e: React.ChangeEvent) {
    const updatedValue = (e.target as HTMLInputElement).value
    setSearchValue(updatedValue)
    response(updatedValue)
  }
  
  return (
  <div>
    <input
      className="react-search-field-input"
      onChange={_onChange}
      placeholder="Search Pokedex"
      type="text"
      value={searchVal}
    />
  </div>
  )
};

export default PKSearch