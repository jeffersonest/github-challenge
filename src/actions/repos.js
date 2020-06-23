export const loadRepos = (payload) => {
    console.log('PAYLOAD',payload)
    return {
        type: 'LOADREPOS',
        payload
    }
}