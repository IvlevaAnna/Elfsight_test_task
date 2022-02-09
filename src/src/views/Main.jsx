import React, {useEffect, useState} from 'react'
import s from './Main.module.css'
import logo from '../img/logo.png'
import Pagination from '@mui/material/Pagination'
import ReactLoading from 'react-loading'
import { Card } from "../components/Card/Card";

export const Main = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({})
    const [page, setPage] = useState(1)

    function getData (url) {
        return fetch(url)
            .then(res => res.json())
    }

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            }
        )
    }, [page])

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <>
            {
                isLoaded
                    ?
                    <div className={s.container}>
                        <img src={logo} height={'220px'}/>
                        <div className={s.wrapper}>
                            {
                                items?.results?.map((character) => {
                                    return <Card character={character} key={`chrctr-${character.id}`}/>
                                })
                            }
                        </div>
                        <Pagination count={items?.info?.pages}
                                    variant='outlined'
                                    shape='rounded'
                                    hidePrevButton
                                    hideNextButton
                                    onChange={handleChange}
                        />
                    </div>
                    : <ReactLoading type='bubbles' color='#40f286' height={'10%'} width={'10%'}/>
            }
        </>
    )
}
