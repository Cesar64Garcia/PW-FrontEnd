const rootReducer = (state = [], action) => {
    let newSeries
    switch(action.type) {
        case 'DELETE_SEASON':
            newSeries = state.series.filter(serie => serie.id !== action.id);
            return {
                ...state,
                series: newSeries
            }
        case 'ADD_SEASON':
            newSeries = [
                ...state.series,
                {
                    id: action.id,
                    serie: action.serie,
                    capitulos: action.capitulos,
                    temporada: action.temporada,
                    portada: action.portada,
                    body: action.body
                }
            ]
            return {
                ...state,
                series: newSeries
            }
        default:
            localStorage.clear()
            return state;
    }
}

export default rootReducer