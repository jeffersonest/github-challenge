export const search = (payload) => {
    return {
        type: 'SEARCH',
        payload
    }
}

export const openList = () => {
    return {
        type: 'OPENLIST'
    }
}

export const closeList = () => {
    return {
        type: 'CLOSELIST'
    }
}