const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleShip } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battleship", 5, 4);
const pgr = new Powergrid();

const fittings = new Fitting(battleShip.Raven, engi, pgr);

fittings
  .add(mods.high.missile.rapid.large.republicFleet, 7)
  
  // .add(mods.mid.GroupBooster, 2)
  .add(mods.mid.ewar.scrambler.republicFleet, 1)
  .add(mods.mid.ewar.targetPainter, 1)
  .add(mods.mid.ewar.web, 2)

  .add(mods.low.afterburner.large.republicFleet)
  // .add(mods.low.hardener.reactive)
  .add(mods.low.hardener.adaptive, 2)
  .add(mods.low.shieldExtender.large.republicFleet, 2)
  .add(mods.low.weaponUpgrade.missile.ctype, 1)

  .add(mods.rig.combat.coreDefenseFieldExtender(3), 1)
  // .add(mods.rig.combat.coreDefenseFieldExtender(3))
  .add(mods.rig.combat.bayLoadingAccelerator(2))
  .add(mods.rig.combat.warheadCalefactionCatalyst(2))

  .add(mods.rig.engineering.auxiliaryThrusters(1), 2)
  .add(mods.rig.engineering.polycarbonEngineHousing(2));

fittings.print();