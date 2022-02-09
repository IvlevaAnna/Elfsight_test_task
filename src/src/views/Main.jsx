import React, {useEffect, useState} from 'react'
import s from './Main.module.css'
import Pagination from '@mui/material/Pagination'
import ReactLoading from 'react-loading'
import { Card } from "../components/Card/Card";

export const Main = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    function getData () {
        return fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
    }

    useEffect(() => {
        getData().then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            }
        )
    }, [])

    return (
        <>
            {
                isLoaded
                    ?
                    <div className={s.container}>
                        <div className={s.wrapper}>
                            {
                                items?.results?.map((character) => {
                                    return <Card character={character} key={`chrctr-${character.id}`}/>
                                })
                            }
                        </div>
                        <Pagination count={items?.info?.pages} variant='outlined' shape='rounded'/>
                    </div>
                    : <ReactLoading type='bubbles' color='#40f286' height={'10%'} width={'10%'}/>
            }
        </>
    )
}
