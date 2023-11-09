// TODO: May remove later
export const getImageStyles = (isSquareImage: boolean) => {
  return isSquareImage
    ? {
        mb: 2,
        width: ["15rem", "20rem"],
        height: ["15rem", "18rem"],
      }
    : {
        mb: 2,
        width: ["15rem", "30rem"],
        height: ["8rem", "15rem"],
      };
};
