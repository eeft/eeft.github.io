const base = 40000;

function lockTime(scanRes, signature){
  return (base / scanRes) / asinh2(signature);
}

function asinh2(value){
  return Math.pow(Math.asinh(value), 2);
}

console.log(lockTime(2356, 28.9));