export const loadStarredRepos = (payload) => {
    console.log('PAYLOAD',payload)
    return {
        type: 'LOADSTARREDREPOS',
        payload
    }
}