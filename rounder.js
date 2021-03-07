const roundNearQtr = (num) => (Math.round(num * 4) / 4).toFixed(2);

const rounder = (ratingObj) => {
  let numOfReviews = 0;
  let totalScore = 0;
  const arrayOfValidRatings = Object.keys(ratingObj);
  arrayOfValidRatings.forEach((num) => {
    numOfReviews += Number(ratingObj[num]);
    totalScore += Number(num) * Number(ratingObj[num]);
  });
  const avgNum = totalScore / numOfReviews;
  return Number(roundNearQtr(avgNum));
};

export default rounder;
