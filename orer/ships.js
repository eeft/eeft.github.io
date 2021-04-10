class Ship {
  constructor(name = "", powergrid = 0, shieldResistanceProfile, armorResistanceProfile, hullResistanceProfile){
    this.name = name;
    this.powergrid = powergrid;
    this.shieldResistanceProfile = shieldResistanceProfile
    this.armorResistanceProfile = armorResistanceProfile;
    this.hullResistanceProfile = hullResistanceProfile;
  }
}

module.exports = {
  Ship,
  frigate: {
    CondorInterceptor: new Ship("Condor Interceptor", 39),
    ExecutionerInterceptor: new Ship("Executioner Interceptor", 62),
    ExecutionerInterceptor2: new Ship("Executioner Interceptor II", 66),
    PunisherAssult: new Ship("Punisher Assault", 63),
    Nemesis: new Ship("Nemesis", 52),
    Succubus: new Ship("Succubus", 93),
    Daredevil: new Ship("Daredevil", 72), 
    Cruor: new Ship("Cruor", 88),
  },
  cruiser: {
    Ashimmu: new Ship("Ashimmu", 1162),
    Cynabal: new Ship("Cynabal", 949),
    MoaGuardian: new Ship("Moa Guardian", 658),
    MoaGuardian2: new Ship("Moa Guardian II", 707), 
  },
  battleCruiser: {
    CycloneGuardian: new Ship("Cyclone Guardian", 668),
    FeroxGuardian: new Ship("Ferox Guardian", 868),
    Drake: new Ship("Drake", 733),
    Harbinger: new Ship("Harbinger", 1209),
    Hurricane: new Ship("Hurricane", 875),
    Prophecy: new Ship("Prophecy", 741),
  },
  battleShip: {
    Raven: new Ship("Raven", 8808),
    Dominix: new Ship("Dominix", 6912),
  }
};