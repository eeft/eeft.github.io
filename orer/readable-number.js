/**
 * @param {number} num 
 */
function readableNumber(num){
  const str = num.toString();
  let rint = [];

  for (let i = str.length - 1; i >= 0; i--) {
    rint.unshift(str[i]);
    const rss = rint.slice(0, rint.length > 3 ? 3 : rint.length);
    const rest = str.substring(0, i);

    if((i > 0) && str[i] !== "." && rint.length >= 3 && !rss.includes(",") && !rss.includes(".") && !rest.includes(".")) rint.unshift(",");
  }

  return rint.join("");
}

module.exports = readableNumber;