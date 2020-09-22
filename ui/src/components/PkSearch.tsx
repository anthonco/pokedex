import React from 'react'
import { gql } from '@apollo/client'

const POKEMON_QRY = gql`
  query($skip: Int, $limit: Int) {
    pokemonMany(skip: $skip, limit: $limit) {
      id
      name
      num
      img
    }
  }
`

type PKSearchProps = {
  name: string;
}

const PKSearch:React.FC<PKSearchProps> = ({ name }) => {
  // name is string!
  return <h1>Hello {name}</h1>
};

export default PKSearch