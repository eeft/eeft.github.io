const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const { battleCruiser } = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Battlecruiser", 5, 5, 4);
const pgr = new Powergrid().add(3).add(3);

const fittings = new Fitting(battleCruiser.Hurricane, engi, pgr);

fittings
  .add(mods.rig.engineering.ancillaryPowergridRouter(3), 2);

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