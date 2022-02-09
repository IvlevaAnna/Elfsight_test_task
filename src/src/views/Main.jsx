import React, {useEffect, useState} from 'react'
import s from './Main.module.css'
import logo from '../img/logo.png'
import Pagination from '@mui/material/Pagination'
import ReactLoading from 'react-loading'
import { Card } from "../components/Card/Card";
import {Filters} from "../components/Filters/Filters";

function getData (url) {
    return fetch(url)
        .then(res => res.json())
}

export const Main = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState({})
    const [page, setPage] = useState(1)

    const [filters, setFilters] = useState({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
    })

    useEffect(() => {
        (filters.name || filters.status || filters.species || filters.type || filters.gender)
            ? getData(`https://rickandmortyapi.com/api/character/?page=${page}&name=${filters.name}&status=${filters.status}&species=${filters.species}&type=${filters.type}&gender=${filters.gender}`)
                .then(
                    (result) => {
                        setIsLoaded(true)
                        setItems(result)
                    }
                )
            : getData(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(
                    (result) => {
                        setIsLoaded(true)
                        setItems(result)
                    }
                )
    }, [page])

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character/?name=${filters.name}&status=${filters.status}&species=${filters.species}&type=${filters.type}&gender=${filters.gender}`)
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                }
            )
    }, [filters])

    const handleChange = (event, value) => {
        setPage(value)
    }
    console.log(items)

    return (
        <>
            {
                isLoaded
                    ?
                    <div className={s.container}>
                        <img src={logo} height={'220px'} />
                        <Filters filters={filters} setFilters={setFilters} />
                        <div className={s.wrapper}>
                            {
                                items.info
                                    ? items?.results?.map((character) => {
                                        return <Card character={character} key={`chrctr-${character.id}`} />
                                    })
                                    : <h1>There is no such Characters...</h1>
                            }
                        </div>
                        <Pagination count={items?.info?.pages}
                                    variant='outlined'
                                    shape='rounded'
                                    hidePrevButton
                                    hideNextButton
                                    onChange={handleChange}
                                    className={(items?.info?.pages === 1 || items?.info?.pages === undefined) ? s.hidden : null}
                        />
                    </div>
                    : <ReactLoading type='bubbles' color='#40f286' height={'10%'} width={'10%'} />
            }
        </>
    )
}
