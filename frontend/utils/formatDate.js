export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
};