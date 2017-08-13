const getRandomNum = () => {
  const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
  return randomNum;
};

export default getRandomNum;
