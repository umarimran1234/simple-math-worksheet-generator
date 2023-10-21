const ToInt = Number;

export const parseRangeStr = (rangeStr) =>
    rangeStr.split(',').reduce((a, str) => {
        if (!str.includes('-')) {
            a.push(ToInt(str));
            return a;
        }
        const [low, high] = str.split('-');
        for (let i = Number(low); i <= high; i++) {
            a.push(i);
        }
        return a;
    }, []);


export const parseRange = (rangeStr: string, reverse: boolean) => {
    let numArr = parseRangeStr(rangeStr);
    if (reverse) {
        return numArr.reverse();
    }
    return numArr;
}