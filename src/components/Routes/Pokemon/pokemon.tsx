import { FC } from 'react'

export const Pokemon: FC = props => {
    return(
        <> 
        <img src={`${process.env.PUBLIC_URL}/images/pokeBackg.jpg`} alt="pokemon background" id='pokeBacground'></img>
        </>
    )
}