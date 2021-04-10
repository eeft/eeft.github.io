const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleCruiser: { Drake } } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battlecruiser", 5, 4);
const pgr = new Powergrid();

const fittings = new Fitting(Drake, engi, pgr);

fittings
  .add(mods.high.missile.rapid.medium.republicFleet, 7)
  
  .add(mods.mid.ewar.web)
  .add(mods.mid.ewar.scrambler.republicFleet)
  .add(mods.mid.ewar.targetPainter)

  .add(mods.low.microwarpdrive.medium.republicFleet)
  .add(mods.low.shieldBooster.large.republicFleet)
  .add(mods.low.capacitorBattery.medium.ctype)
  .add(mods.low.hardener.adaptive, 2)

  .add(mods.rig.combat.coreDefenseChargeEconomizer(3))
  .add(mods.rig.combat.bayLoadingAccelerator(2))
  .add(mods.rig.combat.warheadCalefactionCatalyst(2))

  .add(mods.rig.engineering.polycarbonEngineHousing(2))
  .add(mods.rig.engineering.auxiliaryThrusters(2))
  .add(mods.rig.engineering.dynamicFuelValve(3));

fittings.print();