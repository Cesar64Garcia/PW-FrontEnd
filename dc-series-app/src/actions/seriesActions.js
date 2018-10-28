import axios from 'axios'

export const GET_SEASONS = 'GET_SEASONS'
export const GET_SEASON = 'GET_SEASON'
export const ADD_SEASON = 'ADD_SEASON'
export const DELETE_SEASON = 'DELETE_SEASON'
export const UPDATE_SEASON = 'UPDATE_SEASON'
export const ERROR_GET_SEASONS = 'ERROR_GET_SEASONS'
export const ERROR_GET_SEASON = 'ERROR_GET_SEASON'
export const ERROR_ADD_SEASONS = 'ERROR_ADD_SEASONS'
export const ERROR_UPDATE_SEASONS = 'ERROR_UPDATE_SEASONS'
export const ERROR_DELETE_SEASONS = 'ERROR_DELETE_SEASONS'

const apiURI = 'http://localhost:3333/api/v1/series/'

export const getSeasons = () => {
    return (dispatch, getState) => {
        axios.get(apiURI)
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: GET_SEASONS,
                    series: response.data
                })
            } else {
                dispatch({
                    type: ERROR_GET_SEASONS,
                    message: 'Unknown error'
                })
            }
        })
        
    }
}

export const getSeason = (id) => {
    return (dispatch, getState) => {
        axios.get(apiURI + id)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: GET_SEASON,
                        actualSerie: response.data[0]
                    })
                } else {
                    dispatch({
                        type: ERROR_GET_SEASON,
                        message: 'Unknown error'
                    })
                }
            })

    }
}

export const addSerie = (serie) => {
    return (dispatch, getState) => {
        axios.post(apiURI, { 'serie': serie })
        .then((response) => {
            if (response.status === 201) {
                serie._id = response.data.id
                dispatch({ type: ADD_SEASON, serie })
            } else {
                dispatch({
                    type: ERROR_ADD_SEASONS,
                    message: 'Unknown error'
                })
            }
        })
        
    }
}

export const deleteSerie = (id) => {
    return (dispatch, getState) => {
        axios.delete(apiURI + id)
        .then((response) => {
            if (response.status === 204) {
                dispatch({ type: DELETE_SEASON, id})
            } else {
                dispatch({
                    type: ERROR_DELETE_SEASONS,
                    message: 'Unknown error'
                })
            }
        })
    }
}

export const updateSerie = (serie) => {
    return (dispatch, getState) => {
        axios.put(apiURI + serie._id, { 'serie': serie })
        .then((response) => {
            if (response.status === 204) {
                dispatch({ type: UPDATE_SEASON, serie })
            } else {
                dispatch({
                    type: ERROR_UPDATE_SEASONS,
                    message: 'Unknown error'
                })
            }
        })
    }
}