
function createDamageProfile(em = 0, thermal = 0, kinetic = 0, explosive = 0){
  return {
    em,
    thermal,
    kinetic,
    explosive
  }
}

function createModule(name = "", activation, damageProfile){
  return {
    name,
    damageProfile,
    activation,
    type: "WEAPON",
  }
}

function createWeaponUpgrade(name = "", passiveDmgMod = 0, passiveActivationMod = 0, activeDmgMod = 0, activeActivationMod = 0){
  return {
    name,
    passiveDmgMod,
    passiveActivationMod,
    activeDmgMod,
    activeActivationMod,
    type: "WUPGRADE",
  }
}

function calculateDamage(modules = [], skillMultiplier, rbDmg = 0, rbActi = 0, dmgKey = "passiveDmgMod", activationKey = "passiveActivationMod"){
  const total = createDamageProfile();
  let activationAvg = 0;
  let rawTotal = 0;
  const weaponUpgrades = [];
  const diminishishgReturnsMod = 0.13;
  const activationAiminishishgReturnsMod = 0.045;
  let activationModifier = 1;
  let activationModifiersApplied = 0;

  for (const module of modules) {
    if(module.type === "WUPGRADE") {
      weaponUpgrades.push(module);
    }
  }

  weaponUpgrades.sort((a,b) => b[dmgKey] - a[dmgKey]);

  for (const module of modules) {

    if(module.type === "WUPGRADE") continue;

    for (const key in module.damageProfile) {
      const baseDamage = module.damageProfile[key] + (module.damageProfile[key] * rbDmg);
      const skillDamage = baseDamage * skillMultiplier;
      let bonusDamage = 0;
      let upgradesApplied = 0;

      for (const upgrade of weaponUpgrades) {
        const dmr = diminishishgReturnsMod * upgradesApplied;
        const dmrMod = dmr === 0 ? 1 : 1 - dmr;
        const mod = upgrade[dmgKey] * dmrMod;
        bonusDamage += baseDamage * mod;
        upgradesApplied++;
      }

      total[key] += baseDamage + skillDamage + bonusDamage;
      // total[key] += module.damageProfile[key] * rbDmg * skillMultiplier * rigDamageMultiplier;
    }
    activationAvg += module.activation;
  }
  
  const avg = activationAvg / (modules.length - weaponUpgrades.length);

  weaponUpgrades.sort((a,b) => b[activationKey] - a[activationKey]);

  for (const upgrade of weaponUpgrades) {
    const dmr = activationAiminishishgReturnsMod * activationModifiersApplied;
    const dmrMod = dmr === 0 ? 1 : 1 - dmr;
    const mod = upgrade[activationKey] * dmrMod;
    activationModifier -= mod;
    activationModifiersApplied++;
  }

  for (const key in total) {
    rawTotal += total[key];
  }

  

  return {
    alpha: total,
    dps: calcDPS(rawTotal, avg, rbActi, 1 - activationModifier),
  };
}

function calcDPS(dmg, interval, ...modifiers){
  let adjustedInterval = interval;

  for (const mod of modifiers) {
    const imod = adjustedInterval * mod;
    adjustedInterval -= imod;
  }

  return dmg / adjustedInterval;
}

function weaponOperations(basic = 0, adv = 0, exp = 0){
  return (basic * 0.04) + (adv * 0.02) + (exp * 0.02);
}

function weaponUpgrade(basic = 0, adv = 0, exp = 0){
  return (basic * 0.03) + (adv * 0.02) + (exp * 0.02);
}

function printFitting(modules){
  for (const module of modules) {
    console.log(module.name);
  }
}

function printDamageProfile(profile){
  for (const key in profile) {
    console.log(`${key.toUpperCase()} : ${profile[key]}`);
  }
}

function calculateHotDamage(fittings, skillMultiplier, rollBonusDmg, rollBonusActi){
  return calculateDamage(fittings, skillMultiplier, rollBonusDmg, rollBonusActi, "activeDmgMod", "activeActivationMod");
}

function printDamageStats(fittings, skillMultiplier, rollBonusDmg, rollBonusActi){
  const { alpha, dps } = calculateDamage(fittings, skillMultiplier, rollBonusDmg, rollBonusActi);
  const { alpha: hotAlpha, dps: hotDps } = calculateHotDamage(fittings, skillMultiplier, rollBonusDmg, rollBonusActi);

  console.log("Fittings: ");
  printFitting(fittings);
  console.log(`Alpha:`);
  printDamageProfile(alpha);
  console.log(`DPS: ${dps}`);
  console.log(`Hot Alpha:`);
  printDamageProfile(hotAlpha);
  console.log(`Hot DPS: ${hotDps}`);
}

function missleDamageProfile(dmg){
  return createDamageProfile(dmg, dmg, dmg, dmg);
}

function laserDamageProfile(em, them){
  return createDamageProfile(em, them);
}

function cannonDamageProfile(thermal, kinetic){
  return createDamageProfile(undefined, thermal, kinetic, thermal);
}

const dp = missleDamageProfile(211 * 1.25);

printDamageStats([
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),
  createModule("Caldari Navy Large Missile Launcher", 16.54 * 0.75, dp),

  createWeaponUpgrade("Bay Loading Accelerator II", undefined, 0.1, undefined, 0.1),
  // createWeaponUpgrade("Warhead Calefaction Catalyst II", 0.15, undefined, 0.15, undefined),
  createWeaponUpgrade("C-Type BCU", 0.05, 0.045, 0.09 + 0.05, 0.045 * 4),
  createWeaponUpgrade("C-Type BCU", 0.05, 0.045, 0.09 + 0.05, 0.045 * 4),
], weaponOperations(5,4) + weaponUpgrade(4,3), undefined, undefined);