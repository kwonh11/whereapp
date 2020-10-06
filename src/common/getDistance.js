export default function getDistance(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
    const p = 0.017453292519943295;
    const c = Math.cos;
    const a = 0.5 - c((lat2-lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2- lon1) * p)) / 2;
    const dist = 12742 * Math.asin(Math.sqrt(a)); 
    return dist * 1000;
}
