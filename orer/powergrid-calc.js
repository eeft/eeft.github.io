const SHIPS = require("./ships");
const MODULES = require("./modules");
const { ShipModule } = require("./modules");
const { Ship } = require("./ships");

const basePG = 1146;
const skillBonus = 1.4;
const battery = 573;
const shieldBooster = 502;
const shieldreduction = 0.8;

function getPowergrid(baseValue, skillMultiplier = 0, rigMultiplier = 0){
  return baseValue + (baseValue * skillMultiplier) + (baseValue * rigMultiplier);
}

function modulePowergridRequirement(baseValue, reductionFactor = 1){
  return baseValue * reductionFactor;
}

function createModule(name = "", baseValue, reductionFactor){
  return {
    name,
    powergrid: modulePowergridRequirement(baseValue, reductionFactor),
  }
}

function calculatePowergrid(modules){
  let tot = 0;

  for (const module of modules) {
    tot += module.getPowergrid ? module.getPowergrid() : module.powergrid;
  }

  return tot;
}

function printFitting(modules){
  for (const module of modules) {
    console.log(`${module.name} | powergrid usage: ${module.getPowergrid ? module.getPowergrid() : module.powergrid}`);
  }
}

function printPowergridInfo(baseValue, skillMultiplier = 0, rigMultiplier = 0){
  console.log(`Base Powergrid: ${baseValue}`);
  console.log(`Powergrid from skills: ${baseValue * skillMultiplier}`);
  console.log(`Powergrid from rigs: ${baseValue * rigMultiplier}`);
}

function cTypeLargeAutoCannon(reductionFactor){
  return createModule("Gist C-Type Large Autocannon", 853, reductionFactor);
}

function cTypeMediumAutoCannon(reductionFactor){
  return createModule("Gist C-Type Medium Autocannon", 86, reductionFactor);
}

const tornadoFittings = [
  cTypeLargeAutoCannon(0.05),
  cTypeLargeAutoCannon(0.05),
  cTypeLargeAutoCannon(0.05),
  cTypeLargeAutoCannon(0.05),
  cTypeLargeAutoCannon(0.05),
  cTypeLargeAutoCannon(0.05),

  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Republic Fleet Warp Scrambler", 6),

  createModule("Gist C-Type Large Shield Booster", 405, 0.85 * 0.95),
  createModule("Gist C-Type Large Capacitor Battery ", 753),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("'Ranger' Medium Afterburner", 75),
];

const talwarFitting = [
  createModule("Caldari Navy Medium Rapid Missile Launcher", 36),
  createModule("Caldari Navy Medium Rapid Missile Launcher", 36),
  createModule("Caldari Navy Small Missile Launcher", 7),
  createModule("Caldari Navy Small Missile Launcher", 7),

  createModule("Republic Fleet Warp Scrambler", 6),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Caldari Navy Guidance Disruptor", 1),

  createModule("MK7 Small Microwarpdrive", 13),
  createModule("Caldari Navy Small Shield Extender", 7),
  createModule("Smuggler Small Afterburner", 12),
];

const hurricaneProto = [
  cTypeMediumAutoCannon(0.91),
  cTypeMediumAutoCannon(0.91),
  cTypeMediumAutoCannon(0.91),
  cTypeMediumAutoCannon(0.91),
  cTypeMediumAutoCannon(0.91),
  cTypeMediumAutoCannon(0.91),

  createModule("'Uspir' Large Energy Nosferatu", 708),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Republic Fleet Warp Scrambler", 6),

  createModule("Gistum C-Type Medium Shield Booster", 55, shieldreduction),
  createModule("Smuggler Medium Afterburner", 67),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("Gist C-Type Gyrostabilizers", 7),
];

const cynabal = [
  cTypeMediumAutoCannon(0.94),
  cTypeMediumAutoCannon(0.94),
  cTypeMediumAutoCannon(0.94),
  cTypeMediumAutoCannon(0.94),
  cTypeMediumAutoCannon(0.94),

  createModule("'Uspir' Large Energy Nosferatu", 708),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Republic Fleet Warp Scrambler", 6),

  createModule("Gist C-Type Large Shield Booster", shieldBooster, shieldreduction),
  createModule("Centum C-Type Medium Afterburner", 83),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("Gist C-Type Adaptive Invulnerability Field", 1),
  createModule("Gist C-Type Gyrostabilizers", 7),
];

const executionerInterceptorFitting = [
  createModule("'Challenger' Medium Rapid Missile Launcher", 34, 0.88),
  createModule("'Challenger' Medium Rapid Missile Launcher", 34, 0.88),
  createModule("'Challenger' Medium Rapid Missile Launcher", 34, 0.88),

  createModule("Republic Fleet Warp Disruptor", 1),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Caldari Navy Guidance Disruptor", 1),

  createModule("All-round Damage Control", 1),
  createModule("C-Type Small shield Booster", 6, 0.85 * 0.95),
  createModule("C-Type Small AfterBurner", 15),
  // createModule("C-Type Ballistic Control System", 7),
];

const moaGuardian = [
  createModule("'Mirror' Small Shield Field Module", 1),
  createModule("Mk7 Large Group Shield Booster", 1),

  createModule("C-Type Medium Shield Booster", 55, 0.85 * 0.95),
  createModule("C-Type Large Capacitor Battery ", 753),
  createModule("C-Type Adaptive Invulnerability Field", 1),
  createModule("C-Type Adaptive Invulnerability Field", 1),
  createModule("C-Type Adaptive Invulnerability Field", 1),
];


const phantasm = [
  createModule("C-Type Medium Pulse Laser", 117, 0.94),
  createModule("C-Type Medium Pulse Laser", 117, 0.94),
  createModule("C-Type Medium Pulse Laser", 117, 0.94),
  createModule("C-Type Medium Pulse Laser", 117, 0.94),

  createModule("'Uspir' Large Energy Nosferatu", 708),
  createModule("Republic Fleet Warp Scrambler", 6),
  createModule("'Mirror' Small Shield Field Module", 1),

  createModule("C-Type Large Shield Booster", 405, 0.85 * 0.95),
  createModule("C-Type Large Capacitor Battery ", 753),
  createModule("C-Type Adaptive Invulnerability Field", 1),
  createModule("C-Type Adaptive Invulnerability Field", 1),
  createModule("C-Type Reactive Invulnerability Field", 1),
];

const worm = [
  createModule("C-Type Medium Rapid Missile Launcher", 43),
  createModule("C-Type Medium Rapid Missile Launcher", 43),

  createModule("Republic Fleet Warp Disruptor", 1),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Caldari Navy Guidance Disruptor", 1),

  createModule("C-Type Small shield Booster", 6, 0.85 * 0.95),
  createModule("C-Type Small AfterBurner", 15),
  createModule("C-Type Ballistic Control System", 7),
];

const logiExe = [
  createModule("C-Type Medium Remote Shield Booster", 29),
  createModule("C-Type Medium Remote Shield Booster", 29),
  createModule("C-Type Small Remote Shield Booster", 3),

  createModule("Mk7 Medium Group Shield Booster", 1),
  createModule("Mk7 Medium Group Shield Booster", 1),
  createModule("Mk7 Medium Group Shield Booster", 1),

  createModule("C-Type Small AfterBurner", 15),
  createModule("C-Type Small Capacitor Battery ", 9),
  createModule("C-Type Small Capacitor Battery ", 9),
];

const slasherInty = [
  // createModule("C-Type Small Autocannon", 4),
  // createModule("C-Type Small Autocannon", 4),
  // createModule("C-Type Small Autocannon", 4),

  createModule("'Criminal' Small Strike Cannon", 11, 0.80),
  createModule("'Criminal' Small Strike Cannon", 11, 0.80),
  createModule("'Criminal' Small Strike Cannon", 11, 0.80),

  createModule("Republic Fleet Warp Disruptor", 1),
  createModule("Republic Fleet Statis Webifier", 1),
  createModule("Caldari Navy Guidance Disruptor", 1),

  createModule("Republic Fleet Small Microwarpdrive", 15),
  createModule("Smuggler Small Afterburner", 12),
  createModule("All-round Damage Control", 1),
];

const condorInty = [

];

function printAndCalculateFitting(shipName, basePowergrid, skillMultiplier, rigMultiplier, fittings = []){
  console.log(`Ship name: ${shipName}`);
  printPowergridInfo(basePowergrid, skillMultiplier, rigMultiplier);
  console.log(`Available Powergrid: ${getPowergrid(basePowergrid, skillMultiplier, rigMultiplier)}`);
  console.log(`Required Powergrid: ${calculatePowergrid(fittings)}`);
  console.log("Fittings: ");
  printFitting(fittings);
}

function calcFitting(ship, skillMultiplier, rigMultiplier, fittings = []){
  console.log(`Ship name: ${ship.name}`);
  printPowergridInfo(ship.powergrid, skillMultiplier, rigMultiplier);
  console.log(`Available Powergrid: ${getPowergrid(ship.powergrid, skillMultiplier, rigMultiplier)}`);
  console.log(`Required Powergrid: ${calculatePowergrid(fittings)}`);
  console.log("Fittings: ");
  printFitting(fittings);
}

function engineeringSkill(basic = 0, adv = 0, expert = 0){ 
  const b = [0,0,0,0.08,0.16,0.25];
  const a = [0,0,0,0.05,0.1,0.15];
  const e = [0,0,0,0.04,0.06,0.1];

  return b[basic] + a[adv] + e[expert];
}

class EngineeringSkill{
  constructor(name = "", basic = 0, advanced = 0, expert = 0){
    this.name = name;
    this.basic = basic;
    this.advanced = advanced;
    this.expert = expert;
  }

  printInfo(){
    console.log(`${this.name} Engineering skills: ${this.basic}/${this.advanced}/${this.expert}`);
  }

  getValue(){
    return engineeringSkill(this.basic, this.advanced, this.expert);
  }
}

class Powergrid {
  constructor(){
    this.rigs = [];
  }

  getRigValue(level){
    return [0.05, 0.075, 0.1, 0.125][level];
  }

  /**
   * @param {0|1|2|3} level 
   */
  add(level = 0){
    this.rigs.push(this.getRigValue(level));

    return this;
  }

  getValue(){
    let total = 0;

    for (const rigValue of this.rigs) {
      total += rigValue;
    }

    return total;
  }
}

class Fitting{
  /**
   * @param {Ship} ship 
   * @param {EngineeringSkill} engineering 
   * @param {Powergrid} powergridRigs 
   * @param {ShipModule[]} fittings 
   */
  constructor(ship, engineering, powergridRigs, fittings = []){
    this.ship = ship;
    this.engineering = engineering;
    this.powergrid = powergridRigs;
    this.fittings = fittings;
  }

  /**
   * @param {ShipModule} mod 
   * @param {number} quantity
   */
  add(mod, quantity = 1){

    for (let index = 0; index < quantity; index++) {
      this.fittings.push(mod);
    }

    return this;
  }

  print(){
    console.log(`Ship name: ${this.ship.name}`);
    this.engineering.printInfo();
    printPowergridInfo(this.ship.powergrid, this.engineering.getValue(), this.powergrid.getValue());
    console.log(`Available Powergrid: ${getPowergrid(this.ship.powergrid, this.engineering.getValue(), this.powergrid.getValue())}`);
    console.log(`Required Powergrid: ${calculatePowergrid(this.fittings)}`);
    console.log("Fittings: ");
    printFitting(this.fittings);
  }
}

module.exports = {
  Fitting,
  EngineeringSkill,
  // calcFitting,
  Powergrid,
};

// printAndCalculateFitting("Tornado", 1146, 1.26, 1, tornadoFittings);
// printAndCalculateFitting("'Ximeng' Executioner Interceptor", 62, 0.46, 0.375, executionerInterceptorFitting);
// printAndCalculateFitting("Moa Guardian 2", 707, 0.47, 0.375, moaGuardian);
// printAndCalculateFitting("Phantasm", 1086, 0.47, 0.375, phantasm);
// printAndCalculateFitting("Worm", 64, 0.47, 0.35, worm);
// printAndCalculateFitting("'Logistics' Executioner Interceptor", 62, 0.47, 0.125, logiExe);
// printAndCalculateFitting("Slasher Interceptor", 39, 0.5, undefined, slasherInty);
// calcFitting(SHIPS.frigate.CondorInterceptor, engineeringSkill(5, 5, 3), undefined, [
//   MODULES.high.missile.torpedoLauncher.small.ctype.withPowergridReductionFactor(0.03),
//   MODULES.high.missile.torpedoLauncher.small.ctype.withPowergridReductionFactor(0.03),
//   MODULES.high.missile.torpedoLauncher.small.ctype.withPowergridReductionFactor(0.03),

//   MODULES.mid.ewar.web,
//   MODULES.mid.ewar.scrambler.republicFleet,
//   MODULES.mid.nosferatu.small.uspir,

//   MODULES.low.afterburner.small.ctype,
//   MODULES.low.weaponUpgrade.missile.ctype,
//   MODULES.low.shieldBooster.small.ctype.withPowergridReductionFactor(0.20),
// ]);

// calcFitting(SHIPS.cruiser.Ashimmu, engineeringSkill(5,5,5), 0.375, [
//   MODULES.high.laser.pulse.medium.ctype.withPowergridReductionFactor(0.645),
//   MODULES.high.laser.pulse.medium.ctype.withPowergridReductionFactor(0.645),
//   MODULES.high.laser.pulse.medium.ctype.withPowergridReductionFactor(0.645),
//   MODULES.high.laser.pulse.medium.ctype.withPowergridReductionFactor(0.645),
//   MODULES.high.laser.pulse.medium.ctype.withPowergridReductionFactor(0.645),

//   MODULES.mid.ewar.web,
//   MODULES.mid.ewar.scrambler.republicFleet,
//   MODULES.mid.nosferatu.large.uspir,
//   MODULES.mid.nosferatu.large.uspir,

//   MODULES.low.shieldBooster.large.ctype.withPowergridReductionFactor(0.25),
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.microwarpdrive.medium.ctype,
// ]);

// calcFitting(SHIPS.cruiser.Cynabal, engineeringSkill(5,5,4), undefined, [
//   MODULES.high.cannon.strike.medium.ctype.withPowergridReductionFactor(0.06),
//   MODULES.high.cannon.strike.medium.ctype.withPowergridReductionFactor(0.06),
//   MODULES.high.cannon.strike.medium.ctype.withPowergridReductionFactor(0.06),
//   MODULES.high.cannon.strike.medium.ctype.withPowergridReductionFactor(0.06),
//   MODULES.high.cannon.strike.medium.ctype.withPowergridReductionFactor(0.06),

//   MODULES.mid.ewar.web,
//   MODULES.mid.ewar.scrambler.republicFleet,
//   MODULES.mid.ewar.disruptor,

//   MODULES.low.shieldBooster.large.ctype.withPowergridReductionFactor(0.20),
//   MODULES.low.weaponUpgrade.cannon.ctype,
//   MODULES.low.weaponUpgrade.cannon.ctype,
//   MODULES.low.afterburner.medium.ctype,
//   MODULES.low.microwarpdrive.medium.ctype,
// ]);

// calcFitting(SHIPS.cruiser.MoaGuardian, engineeringSkill(5,4), undefined, [

//   MODULES.mid.SFM,
//   MODULES.mid.GroupBooster,

//   MODULES.low.shieldBooster.medium.ctype.withPowergridReductionFactor(0.08),
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.reactive,
//   MODULES.low.capacitorBattery.large.ctype
// ]);

// calcFitting(SHIPS.cruiser.MoaGuardian2, engineeringSkill(5,5,4), 0.375, [

//   MODULES.mid.SFM,
//   MODULES.mid.nosferatu.medium.vrik,

//   MODULES.low.shieldBooster.large.ctype.withPowergridReductionFactor(0.20),
//   MODULES.low.capacitorBattery.large.ctype,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.reactive,
// ]);

// calcFitting(SHIPS.frigate.Nemesis, engineeringSkill(5,5,5), 0.25, [
//   MODULES.high.missile.torpedoLauncher.medium.republicFleet.withPowergridReductionFactor(0.90),
//   MODULES.high.missile.torpedoLauncher.medium.republicFleet.withPowergridReductionFactor(0.90),
//   MODULES.high.missile.torpedoLauncher.medium.republicFleet.withPowergridReductionFactor(0.90),

//   MODULES.mid.ewar.scrambler.republicFleet,
//   MODULES.mid.ewar.scrambler.republicFleet,

//   MODULES.low.afterburner.medium.republicFleet,
//   MODULES.low.weaponUpgrade.missile.republicFleet,
//   MODULES.low.cloak,
// ]);

// calcFitting(SHIPS.battleCruiser.CycloneGuardian, engineeringSkill(5,5,4), 0.325, [
//   MODULES.mid.SFM,
//   MODULES.mid.GroupBooster,
//   MODULES.mid.GroupBooster,

//   MODULES.low.shieldBooster.large.ctype.withPowergridReductionFactor(0.20),
//   MODULES.low.capacitorBattery.large.ctype,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.adaptive,
//   MODULES.low.hardener.reactive,

//   MODULES.rig.combat.coreDefenseChargeEconomizer[3],
//   MODULES.rig.combat.coreDefenseChargeEconomizer[3],
//   MODULES.rig.combat.coreDefenseCapacitorSafeguard[3],

//   MODULES.rig.engineering.ancillaryPowergridRouter[3],
//   MODULES.rig.engineering.ancillaryPowergridRouter[2],
//   MODULES.rig.engineering.ancillaryPowergridRouter[2],
// ]);