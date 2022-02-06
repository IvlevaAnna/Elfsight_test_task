import { getCharacters } from 'rickmortyapi'

export const Characters = () => {
    const all = getCharacters()
    return(
        <div>
            {all}
        </div>
    )
}
