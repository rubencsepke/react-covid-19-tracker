export const calcPercentage = (oldValue: number, newValue: number): string => {
    const decreaseValue = newValue - oldValue;
    return ((decreaseValue / oldValue) * 100).toFixed(2);
}