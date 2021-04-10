const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleShip } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battleship", 5, 4);
const pgr = new Powergrid();

const fittings = new Fitting(battleShip.Raven, engi, pgr);

fittings
  .add(mods.high.missile.large.republicFleet, 7)
  
  .add(mods.mid.GroupBooster, 2)
  .add(mods.mid.ewar.targetPainter, 2)

  .add(mods.low.microwarpdrive.large.republicFleet)
  .add(mods.low.weaponUpgrade.missile.republicFleet, 2)
  .add(mods.low.weaponUpgrade.guidance.caldariNavy, 3)

  .add(mods.rig.combat.bayLoadingAccelerator(2))
  .add(mods.rig.combat.warheadCalefactionCatalyst(2))
  .add(mods.rig.combat.hydraulicBayThrusters(3))

  .add(mods.rig.engineering.auxiliaryThrusters(1), 2)
  .add(mods.rig.engineering.dynamicFuelValve(2));

fittings.print();