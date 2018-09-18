import {v4} from 'node-uuid'

export const loadState = () => {
    const initSeries = [
        {
            id: v4(),
            serie: 'Arrow',
            temporada: 'Season 01',
            portada: 'https://mallsurfer.files.wordpress.com/2013/08/arrow_season_2_poster.jpg',
            body: 'Season 01 from Arrow.',
            capitulos: '21'
        },
        {
            id: v4(),
            serie: 'The Flash',
            temporada: 'Season 01',
            portada: 'http://digitalspyuk.cdnds.net/14/35/768x1109/gallery_ustv-the-flash-poster.jpg',
            body: 'Season 01 from The Flash',
            capitulos: '22'
        },
        {
            id: v4(),
            serie: 'Supergirl',
            temporada: 'Season 01',
            portada: 'https://vignette.wikia.nocookie.net/arrow/images/9/93/Supergirl_season_1_poster_-_A_new_hero_will_rise..png/revision/latest?cb=20170113123304',
            body: 'Season 01 from Supergirl',
            capitulos: '21'
        },
        {
            id: v4(),
            serie: 'Batwoman',
            temporada: 'Pilot',
            portada: 'https://pre00.deviantart.net/e16e/th/pre/i/2018/099/f/a/batwoman_poster_by_dylanl68-dc8di0w.png',
            body: 'Pilot',
            capitulos: '00'
        },
    ]
    
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                series: initSeries
            };
        }
        return JSON.parse(serializedState)
    } catch(err){
        return {
            seri1es: initSeries
        };
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err){
        // Ignor write errors
    }
}