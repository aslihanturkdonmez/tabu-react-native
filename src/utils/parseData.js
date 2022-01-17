export default (data) =>{
    return Object.keys(data).map( (key, index) =>{
        return {
            id: index,
            word: key,
            tabu: data[key],
        };
    });
}