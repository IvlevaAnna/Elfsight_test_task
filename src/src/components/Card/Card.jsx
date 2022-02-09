import React, {useState} from 'react'
import s from './Card.module.css'
import {Box, Modal} from "@mui/material";

export const Card = ({character}) => {
    const [popup, setPopup] = useState(false)

    const setStatus = () => {
        switch (character.status) {
            case 'unknown':
                return <div className={s.status_unknown}></div>
            case 'Alive':
                return <div className={s.status_alive}></div>
            case 'Dead':
                return <div className={s.status_dead}></div>
            default:
                return null
        }
    }

    const handleOpen = () => {
        setPopup(true)
    }

    const handleClose = () => {
        setPopup(false)
    }

    return(
        <>
            <div className={s.card} onClick={handleOpen}>
                <img src={character.image}/>
                <div className={s.card_text}>
                    <div className={s.heading}>
                        {setStatus()}
                        <div>{character.name}</div>
                    </div>
                    <div>Species: {character.species}</div>
                    {
                        character.type ? <div>Type: {character.type}</div> : null
                    }
                    <div>Gender: {character.gender}</div>
                </div>
            </div>
            <Modal
                open={popup}
                onClose={handleClose}
            >
                <Box className={s.full_card}>
                    <img src={character.image}/>
                    <div className={s.card_text}>
                        <div className={s.heading}>
                            {setStatus()}
                            <div>{character.name}</div>
                        </div>
                        <div>Species: {character.species}</div>
                        {
                            character.type ? <div>Type: {character.type}</div> : null
                        }
                        <div>Gender: {character.gender}</div>
                        <div>Location: {character.location.name}</div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
