import React from 'react'
import s from './Filters.module.css'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField} from "@mui/material";

export const Filters = ({filters, setFilters}) => {

    const handleChange = (event, filter) => {
        setFilters((prevFilters) => {return {...prevFilters, [filter]: event.target.value}})
    }

    return (
        <div className={s.container}>
            <TextField id="name-filter"
                       sx={{ width: 120 }}
                       label="name"
                       variant="outlined"
                       value={filters.name}
                       onChange={(e) => handleChange(e, 'name')}
            />

            <FormControl sx={{ width: 120 }}>
                <InputLabel id="status-filter-label">status</InputLabel>
                <Select
                    labelId="status-filter-label"
                    id="status-filter"
                    value={filters.status}
                    label="status"
                    onChange={(e) => handleChange(e, 'status')}
                >
                    <MenuItem value='alive'>alive</MenuItem>
                    <MenuItem value='dead'>dead</MenuItem>
                    <MenuItem value='unknown'>unknown</MenuItem>
                </Select>
            </FormControl>

            <TextField id="species-filter"
                       sx={{ width: 120 }}
                       label="species"
                       variant="outlined"
                       value={filters.species}
                       onChange={(e) => handleChange(e, 'species')}
            />

            <TextField id="type-filter"
                       sx={{ width: 120 }}
                       label="type"
                       variant="outlined"
                       value={filters.type}
                       onChange={(e) => handleChange(e, 'type')}
            />

            <FormControl sx={{ width: 120 }}>
                <InputLabel id="gender-filter-label">gender</InputLabel>
                <Select
                    labelId="gender-filter-label"
                    id="gender-filter"
                    value={filters.gender}
                    label="gender"
                    onChange={(e) => handleChange(e, 'gender')}
                >
                    <MenuItem value='female'>female</MenuItem>
                    <MenuItem value='male'>male</MenuItem>
                    <MenuItem value='genderless '>genderless </MenuItem>
                    <MenuItem value='unknown'>unknown</MenuItem>
                </Select>
            </FormControl>

        </div>
    )
}
