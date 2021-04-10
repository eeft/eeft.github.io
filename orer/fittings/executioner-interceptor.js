const { EngineeringSkill, Fitting, Powergrid } = require("../powergrid-calc");
const SHIPS = require("../ships");
const mods = require("../modules");

const engi = new EngineeringSkill("Frigate", 5, 5, 5);
const pgr = new Powergrid().add(2).add(2).add(2);

const fittings = new Fitting(SHIPS.frigate.Daredevil, engi, pgr);

fittings

  .add(mods.low.microwarpdrive.medium.mk9)

  // .add(mods.rig.engineering.ancillaryPowergridRouter(3), 3);

fittings.print();