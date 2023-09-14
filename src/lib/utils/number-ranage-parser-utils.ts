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