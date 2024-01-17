export const formatNumber = (num: number) => {
    return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}