const ages = [11, 13, 15, 17, 19, 21];
const ages2 = [10, 12, 14, 16];
const ages3 = [ 23, 25, 27, 29, 31];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges);
const business = 450;
const minister = 250;
const sochib = 650;
const takaPoisa = [450, 250, 650, 700];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
// console.log(allAges2);