const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const ships = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("BattleCruiser", 5, 4);
const pgr = new Powergrid().add(0);

const fittings = new Fitting(ships.battleCruiser.FeroxGuardian, engi, pgr);

fittings
  // .add(mods.high.missile.rapid.medium.challenger, 3)

  .add(mods.mid.SFM)
  .add(mods.mid.GroupBooster)
  .add(mods.mid.GroupBooster)

  .add(mods.low.shieldBooster.large.ctype.withPowergridReductionFactor(0.15))
  .add(mods.low.capacitorBattery.large.ctype)
  .add(mods.low.hardener.adaptive, 3)
  .add(mods.low.hardener.reactive, 1)

  .add(mods.rig.combat.coreDefenseChargeEconomizer(3), 2)
  .add(mods.rig.combat.coreDefenseCapacitorSafeguard(3))
  // .add(mods.rig.combat.coreDefenseChargeEconomizer(3))

  .add(mods.rig.engineering.semiconductorMemoryCell(1))
  .add(mods.rig.engineering.capacitorControlCircuit(1))
  .add(mods.rig.engineering.ancillaryPowergridRouter(0));

fittings.print();