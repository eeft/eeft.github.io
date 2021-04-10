const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleShip } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battleship", 5, 4);
const pgr = new Powergrid();

const fittings = new Fitting(battleShip.Dominix, engi, pgr);

fittings
  .add(mods.high.missile.rapid.large.republicFleet, 4)
  
  .add(mods.mid.ewar.targetPainter, 1)
  .add(mods.mid.ewar.web, 1)
  .add(mods.mid.ewar.scrambler.republicFleet, 1)

  .add(mods.low.afterburner.large.republicFleet)
  .add(mods.low.hardener.reactive)
  .add(mods.low.hardener.adaptive, 2)
  .add(mods.low.armorRepairer.large.imperialNavy, 2)

  .add(mods.rig.combat.droneFirepowerAugmentor(3))
  .add(mods.rig.combat.droneSpeedAugmentor(3))
  .add(mods.rig.combat.auxiliaryNanoPump(3))
  // .add(mods.rig.combat.coreDefenseFieldExtender(3))

  .add(mods.rig.engineering.semiconductorMemoryCell(2))
  .add(mods.rig.engineering.capacitorControlCircuit(2), 2);

fittings.print();