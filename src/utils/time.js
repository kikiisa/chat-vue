function timeAgo(inputTime) {
    const now = new Date();
    const time = new Date(inputTime);

    const diffInSeconds = Math.floor((now - time) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} detik yang lalu`;
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} menit yang lalu`;
    } else if (diffInHours < 24) {
        return `${diffInHours} jam yang lalu`;
    } else {
        return `${diffInDays} hari yang lalu`;
    }
}

export default timeAgo