export const TextClear = (source) => {
    var outString = source.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return outString;
}