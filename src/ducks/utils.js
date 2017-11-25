export function generateId() {
    return Date.now()
}

/*export function fbToEntities(values, DataRecord) {
    return Object.entries(values)
        .reduce(
            (acc, [uid, value]) => acc.set(uid, new DataRecord({ uid, ...value })),
            new OrderedMap({})
        )
}*/

export function fetchRequest(req){
    return fetch(req)
        .then(function(response) {
            return response.json()
        })
        .then( (response) => {
            return response;
        } );
}