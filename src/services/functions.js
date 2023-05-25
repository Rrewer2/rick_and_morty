export const isFavourite = ({ id: ID }, arr) => arr.some(({ id }) => id === ID);
