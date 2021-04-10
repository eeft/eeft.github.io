const baseBoost = 457;
const baseActivation = 8;
const hurricaneLogiHpS = (baseBoost * 1.75) / baseActivation;
const drakeLogiHpS = baseBoost / (baseActivation * 0.6);

function maxHps(baseRep){
  return baseRep * 6;
}

function maxDamageByResistances(hps, resistancePercentage){
  return (hps / (1 - (resistancePercentage/100)));
}

function damageAfterResistances(dmg, resistances){
  return (dmg * (1 - (resistances/100)));
}

function logResults(resistances){
  const dps = 543.4892666666667;
  const alpha = 1772.589 + 1080.72965;

  const hotdps = 543.4892666666667;
  const hotalpha = 1772.589 + 1080.72965;

  const hdps = maxDamageByResistances(maxHps(hurricaneLogiHpS), resistances);
  // const ddps = maxDamageByResistances(maxHps(drakeLogiHpS), resistances);

  console.log(`Resitances Average: ${resistances}%`);
  console.log("Hurricane Logistics: ", hdps, "Incoming DPS");
  // console.log("Drake Logistics: ", ddps, "Incoming DPS");
  
  const hshipc = Math.ceil(hdps / dps);
  const hotShipc = Math.ceil(hdps / hotdps);

  console.log(`Number of GHA Harbingers required to break Hurricane Logistics: ${hshipc}`);
  // console.log(`Number of GHA Harbingers HOT required to break Hurricane Logistics: ${hotShipc}`);

  console.log(`Required shield hp to sustain alpha strike from Hurricane Logistics break point: ${damageAfterResistances(alpha * hshipc, resistances)}`);
  // console.log(`Required shield hp to sustain HOT alpha strike from Hurricane Logistics break point: ${damageAfterResistances(hotalpha * hotShipc, resistances)}`);
  console.log("");
}


function ehps(resistance, hp, activation){
  return maxDamageByResistances((hp * 2) / activation, resistance);
}
// logResults(92);
// logResults(94);
// logResults(95);

console.log(ehps(63.59, 548 * (1.375), 9 * (1 - 0.29)));