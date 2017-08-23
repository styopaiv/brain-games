const getRandomNum = (range) => {
  const randomNum = Math.floor(Math.random() * (range - 1)) + 1;
  return randomNum;
};

export default getRandomNum;
