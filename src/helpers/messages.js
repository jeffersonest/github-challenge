export const Message = (code) => {
    switch (code) {
        case 0:
            return 'Success!'
            break;
        case 1:
            return 'User loaded!'
            break;    
        case 2:
            return 'Problem with request!'
            break;    
        case 3:
            return 'User not Found!'
            break;                        
        default:
            break;
    }
}