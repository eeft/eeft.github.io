const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleCruiser: { Prophecy } } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battlecruiser", 5, 4);
const pgr = new Powergrid();

const fittings = new Fitting(Prophecy, engi, pgr);

fittings
  // .add(mods.high.cannon.strike.medium.ctype, 3)
  
  .add(mods.mid.GroupBooster, 2)
  .add(mods.mid.ewar.disruptor)

  .add(mods.low.microwarpdrive.medium.ctype)
  .add(mods.low.shieldExtender.large.republicFleet)
  .add(mods.low.weaponUpgrade.drone.bat)
  .add(mods.low.hardener.adaptive, 2)
  // .add(mods.low.capacitorBattery.medium.ctype)
  // .add(mods.low.hardener.reactive)

  .add(mods.rig.combat.antiEMScreenReinforcer(2))
  .add(mods.rig.combat.coreDefenseFieldExtender(2), 2)
  // .add(mods.rig.combat.warheadCalefactionCatalyst(1))

  // .add(mods.rig.engineering.polycarbonEngineHousing(1))
  // .add(mods.rig.engineering.ancillaryPowergridRouter(2), 2)
  .add(mods.rig.engineering.auxiliaryThrusters(1), 2)
  .add(mods.rig.engineering.dynamicFuelValve(2));

fittings.print();

/**
 * 2x adaptive
 * 
 * em 56
 * t 68
 * k 73
 * ex 78
 * 
 * 2x adaptive + em 30%
 * 
 * em 77
 * t 73
 * k 77
 * ex 81
 * 
 * 2x adaptive + 1 reactive + em 30%
 * 
 * em 80
 * t 77
 * k 81
 * ex 84 */