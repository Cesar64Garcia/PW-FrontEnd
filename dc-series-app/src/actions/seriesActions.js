import {v4} from 'node-uuid'

export const addSerie = (serie) => ({
    type: 'ADD_SEASON',
    id: v4(),
    serie: serie.serie,
    temporada: serie.temporada,
    capitulos: serie.capitulos,
    portada: serie.portada,
    body: serie.body
});

export const deleteSerie = (id) => {
    return {
        type: 'DELETE_SEASON',
        id
    }
}