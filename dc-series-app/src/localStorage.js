export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                series: []
            };
        }
        return JSON.parse(serializedState)
    } catch(err){
        return {
            series: []
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