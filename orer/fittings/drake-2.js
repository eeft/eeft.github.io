const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleCruiser: { Drake } } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battlecruiser", 5, 5, 3);
const pgr = new Powergrid();

const fittings = new Fitting(Drake, engi, pgr);

fittings
  .add(mods.high.missile.torpedoLauncher.medium.republicFleet, 7)
  
  .add(mods.mid.GroupBooster)
  .add(mods.mid.ewar.web)
  .add(mods.mid.ewar.targetPainter)

  .add(mods.low.microwarpdrive.medium.republicFleet)
  .add(mods.low.shieldBooster.large.republicFleet)
  .add(mods.low.capacitorBattery.medium.ctype)
  .add(mods.low.hardener.adaptive, 2)

  .add(mods.rig.combat.coreDefenseChargeEconomizer(3))
  .add(mods.rig.combat.bayLoadingAccelerator(1))
  .add(mods.rig.combat.warheadCalefactionCatalyst(1))

  .add(mods.rig.engineering.polycarbonEngineHousing(1))
  .add(mods.rig.engineering.auxiliaryThrusters(1))
  .add(mods.rig.engineering.dynamicFuelValve(2));

fittings.print();