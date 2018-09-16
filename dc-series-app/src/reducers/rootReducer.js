const initState = {
    series: [
        {id:'1', title:'Lorem 1', season:'01', year:'2018', poster:'http://digitalspyuk.cdnds.net/14/35/768x1109/gallery_ustv-the-flash-poster.jpg', body:'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, pharetra ultrices hendrerit feugiat augue nunc etiam, eu metus laoreet integer pellentesque pretium eget. Vulputate sed faucibus dapibus parturient eu natoque libero suscipit facilisis euismod proin, cursus semper vivamus montes elementum risus phasellus felis magna. Class tristique dictum praesent vehicula sapien facilisis magnis nec aliquet fringilla curabitur, commodo ultricies hendrerit posuere egestas himenaeos sed eu sociosqu fusce.'},
        {id:'2', title:'Lorem 2', season:'02', year:'2018', poster:'https://vignette.wikia.nocookie.net/arrow/images/7/76/The_Flash_season_2_poster_-_Premieres_tonight.png/revision/latest?cb=20151007170844', body:'Arcu auctor sollicitudin metus dis leo per lobortis id mollis cubilia, orci volutpat rutrum neque aliquam natoque hendrerit suspendisse tristique. Nam facilisis mollis habitasse tempor habitant natoque porttitor morbi varius egestas, molestie justo vulputate penatibus nibh potenti eu blandit odio mattis commodo, ac sagittis consequat auctor curae dictum nostra semper ad. Dis sociis id curae justo turpis conubia neque vel maecenas, purus ut tristique himenaeos ad scelerisque nam vivamus, ultricies mollis platea fusce ullamcorper mus massa sem. Felis proin nec ut egestas consequat aptent id et, aliquam potenti netus interdum mattis sodales mus augue blandit, mauris facilisis placerat ligula nullam eros vehicula.'},
        {id:'3', title:'Lorem 3', season:'03', year:'2018', poster:'https://vignette.wikia.nocookie.net/arrow/images/b/ba/The_Flash_season_3_poster_-_Know_your_enemy.png/revision/latest?cb=20170426092952', body:'Facilisi magna nam porta mauris ut elementum vehicula volutpat cum, condimentum sagittis quisque turpis faucibus cursus parturient cubilia odio primis, et pretium metus habitant sollicitudin fusce curae tristique. Fermentum quis urna hendrerit lobortis lectus curabitur scelerisque, porta proin vulputate nisi cum sed nulla, fames iaculis bibendum feugiat accumsan pretium. Lacus dui malesuada etiam integer et dictum, justo nisl lectus fames ut blandit vehicula, sociis pretium aliquet tempor class. Sollicitudin feugiat libero vestibulum nascetur auctor cursus iaculis mauris dictumst, integer at leo vehicula tempor pulvinar dis quam platea, imperdiet porttitor sociis tempus erat aenean quisque condimentum. Fames enim ad cursus orci volutpat at varius nulla condimentum nec, lectus tristique diam ullamcorper ligula sagittis sapien habitasse curabitur, risus felis aliquam hac molestie metus suspendisse dis dictum.'}
    ]
}

localStorage.state = initState;

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_SEASON':
            let newSeries = state.series.filter(serie => serie.id !== serie.id);
            return {
                ...state,
                series: newSeries
            }
        case 'ADD_SEASON':
            break;
        default:
            return state;
    }
}

export default rootReducer