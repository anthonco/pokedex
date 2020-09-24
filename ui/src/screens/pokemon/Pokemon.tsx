import React, { useState }  from 'react'
import styled from 'styled-components'
import { RouteComponentProps, Link } from '@reach/router'
import { useQuery, gql } from '@apollo/client'
import { Container as NesContainer } from 'nes-react'
import PKSearch from '../../components/PkSearch'

const Container = styled(NesContainer)`
  && {
    background: white;
    margin: 2rem 25%;

    ::after {
      z-index: unset;
      pointer-events: none;
    }
  }
`

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  > *:first-child {
    margin-right: 1rem;
  }
`

const POKEMON_MANY = gql`
  query($skip: Int, $limit: Int) {
    pokemonMany(skip: $skip, limit: $limit) {
      id
      name
      num
      img
    }
  }
`

const POKEMON_MANY2 = gql`
  query($skip: Int, $limit: Int) {
    pokemonMany(skip: $skip, limit: $limit) {
      id
      name
      weight
      img
    }
  }
`

function handleSearch(searchTerm: String) {
  console.log(searchTerm)
}


const Pokemon: React.FC<RouteComponentProps & { clickLink: Function }> = ({
  clickLink,
}) => {

  const [pkQuery, setpkQuery] = useState(POKEMON_MANY2)

  // const { loading, error, data } = useQuery(POKEMON_MANY)
  const { loading, error, data } = useQuery(pkQuery)
  const pokemonList:
    | Array<{ id: string; name: string; img: string; num: string }>
    | undefined = data?.pokemonMany

    console.log(pokemonList)
  
    if (loading) {
    return <p>Loading...</p>
  }
  if (error || !pokemonList) {
    return <p>Error!</p>
  }

  return (
    <Container rounded>
      <PKSearch name='Corey' response={handleSearch} />
      <List>
        {pokemonList.map(pokemon => (
          <Link to={pokemon.id} onMouseDown={clickLink as any}>
            <ListItem key={pokemon.id}>
              <img src={pokemon.img} alt={'a pokemon'} />
              {pokemon.name} - {pokemon.num}
            </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  )
}

export default Pokemon
