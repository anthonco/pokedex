import React, { useState }  from 'react'

type PKSearchProps = {
  response: any
}

const PKSearch:React.FC<PKSearchProps> = ({ response }) => {

  const [searchVal, setSearchValue] = React.useState("")
  const [fire, setFire] = React.useState("")
  const [water, setWater] = React.useState("")

  const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

  function _onChange(e: React.ChangeEvent) {
    const searchValue = (e.target as HTMLInputElement).value
    setSearchValue(searchValue)
    response({searchValue: searchValue})
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

    <div className="radio">
      <label>
        Fire
        <input
          type="radio"
          value="fire"
        />
      </label>
    </div>
    <div className="radio">
      <label>
        Water
        <input
          type="radio"
          value="water"
        />
      </label>
    </div>

  </div>
  )
};

export default PKSearch