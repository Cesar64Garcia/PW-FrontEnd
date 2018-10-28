import {GET_SEASONS, ADD_SEASON, UPDATE_SEASON, DELETE_SEASON} from '../actions/seriesActions'

const initState = {
    series: []
}

const rootReducer = (state = initState, action) => {
    let newSeries
    switch(action.type) {
        case GET_SEASONS:
            return Object.assign({}, state, {series: action.series})
        case ADD_SEASON:
            newSeries = [
                ...state.series,
                action.serie
            ]
            return {
                ...state,
                series: newSeries
            }
        case DELETE_SEASON:
            newSeries = state.series.filter(serie => serie._id !== action.id);
            return {
                ...state,
                series: newSeries
            }
        case UPDATE_SEASON: 
            newSeries = state.series
            const index = newSeries.map(serie => serie._id).indexOf(action.serie._id);
            newSeries[index] = action.serie
            return {
                ...state,
                series: newSeries
            }
        default:
            return state;
    }
}

export default rootReducer