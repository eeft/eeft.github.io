
function tau(t){
  return 4.8 / t;
}

function C0(CC, RT){
  return CC * (1 - 1 / Math.cosh(tau(RT) * RT));
}

// console.log(C0(5184, 540));

function getShieldRegenXSec(totalShields, rechargeTime){
  return totalShields / rechargeTime;
}

function timeTofullRegen(remainingShields, totalShields, rechargeTime){
  return (totalShields - remainingShields) / getShieldRegenXSec(totalShields, rechargeTime);
}

console.log(19629 + 4266);