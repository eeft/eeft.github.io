const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { cruiser } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Cruiser", 5, 5, 3);
const pgr = new Powergrid();

const fittings = new Fitting(cruiser.MoaGuardian, engi, pgr);

fittings
  .add(mods.high.missile.rapid.medium.challenger, 3)

  .add(mods.mid.SFM)
  .add(mods.mid.GroupBooster)

  .add(mods.low.shieldBooster.medium.ctype)
  .add(mods.low.capacitorBattery.large.ctype)
  .add(mods.low.hardener.adaptive, 2)
  .add(mods.low.hardener.reactive, 1)

  .add(mods.rig.combat.coreDefenseChargeEconomizer(3), 2)
  .add(mods.rig.combat.coreDefenseCapacitorSafeguard(3))
  // .add(mods.rig.combat.coreDefenseChargeEconomizer(3))

  .add(mods.rig.engineering.semiconductorMemoryCell(1), 2)
  .add(mods.rig.engineering.capacitorControlCircuit(1));

fittings.print();