const roundNearQtr = (num) => (Math.round(num * 4) / 4).toFixed(2);

const rounder = (ratingObj) => {
  let numOfReviews = 0;
  let totalScore = 0;
  [1, 2, 3, 4, 5].forEach((num) => {
    numOfReviews += ratingObj[num];
    totalScore += num * ratingObj[num];
  });
  const avgNum = totalScore / numOfReviews;
  return Number(roundNearQtr(avgNum));
};

export default rounder;
