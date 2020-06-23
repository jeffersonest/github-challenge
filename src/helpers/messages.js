export const Message = (code) => {
    switch (code) {
        case 0:
            return 'Success!'
        case 1:
            return 'User loaded!'
        case 2:
            return 'Problem with request!'
        case 3:
            return 'User not Found!'
        default:
            break;
    }
}