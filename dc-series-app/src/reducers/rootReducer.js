import { GET_SEASONS, GET_SEASON, ADD_SEASON, UPDATE_SEASON, DELETE_SEASON} from '../actions/seriesActions'

const initState = {
    series: [],
    action: ''
}

const rootReducer = (state = initState, action) => {
    let newSeries
    switch(action.type) {
        case GET_SEASONS:
            return {
                ...state,
                series: action.series,
                actualSerie: null,
                action: action.type
            }
        case GET_SEASON:
            return {
                ...state,
                actualSerie: action.actualSerie,
                action: action.type
            }
        case ADD_SEASON:
            newSeries = [
                ...state.series,
                action.serie
            ]
            return {
                ...state,
                series: newSeries,
                action: action.type
            }
        case DELETE_SEASON:
            newSeries = state.series.filter(serie => serie._id !== action.id);
            return {
                ...state,
                series: newSeries,
                action: action.type
            }
        case UPDATE_SEASON: 
            newSeries = state.series
            const index = newSeries.map(serie => serie._id).indexOf(action.serie._id);
            newSeries[index] = action.serie
            console.log('update finished')
            return {
                ...state,
                series: newSeries,
                action: action.type
            }
        default:
            return state;
    }
}

export default rootReducer