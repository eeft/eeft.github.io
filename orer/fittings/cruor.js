const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const SHIPS = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Frigate", 5, 5, 5);
const pgr = new Powergrid().add(3).add(3).add(3);

const fittings = new Fitting(SHIPS.frigate.Cruor, engi, pgr);

fittings
  .add(mods.high.laser.pulse.small.ctype.withPowergridReductionFactor(0.06), 3)
  
  .add(mods.mid.nosferatu.medium.uspir)
  .add(mods.mid.ewar.scrambler.republicFleet)
  .add(mods.mid.ewar.web)

  .add(mods.low.afterburner.small.ctype)
  .add(mods.low.shieldBooster.medium.ctype.withPowergridReductionFactor(0.25))
  .add(mods.low.weaponUpgrade.laser.ctype)

  .add(mods.rig.engineering.ancillaryPowergridRouter(3), 3)

fittings.print();