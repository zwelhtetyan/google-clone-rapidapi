export const lineClamp = (line) => ({
   display: '-webkit-box',
   WebkitLineClamp: line,
   WebkitBoxOrient: 'vertical',
   overflow: 'hidden',
});
