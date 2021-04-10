class ShipModule{
  constructor(name = "", powergrid = 0, rdf = 0){
    this.name = name;
    this.powergrid = powergrid;
    this.reductionFactor = rdf;
  }

  getPowergrid(){
    return this.powergrid * (1 - this.reductionFactor);
  }

  withPowergridReductionFactor(reductionFactor = 0){
    return new ShipModule(this.name, this.powergrid, reductionFactor);
  }
}

function mkl(level){
  return level === 0 ? "prototype" : new Array(level).fill("I").join("");
}

module.exports = {
  ShipModule,
  high: {
    laser:{
      pulse: {
        small: {
          ctype: new ShipModule("C-Type Small Pulse Laser", 13),
        },
        medium: {
          navy: new ShipModule("Imperial Navy Medium Pulse Laser", 98),
          ctype: new ShipModule("C-Type Medium Pulse Laser", 117),
        },
      }
    },
    cannon:{
      strike: {
        medium: {
          ctype: new ShipModule("C-Type Medium Strike Cannon", 139),
        }
      }
    },
    missile: {
      torpedoLauncher: {
        small: {
          republicFleet: new ShipModule("Republic Fleet Small Torpedo Launcher", 4),
          ctype: new ShipModule("C-Type Small Torpedo Launcher", 4),
        },
        medium: {
          republicFleet: new ShipModule("Republic Fleet Medium Torpedo Launcher", 53),
          ctype: new ShipModule("C-Type Medium Torpedo Launcher", 64),
        },
        large: {
          ctype: new ShipModule("C-Type Large Torpedo Launcher", 715),
        }
      },
      rapid: {
        medium: {
          challenger: new ShipModule("'Challenger' Medium Rapid Missile Launcher", 34),
          republicFleet: new ShipModule("Republic Fleet Medium Rapid Missile Launcher", 36),
          ctype: new ShipModule("C-Type Medium Rapid Missile Launcher", 43),
        },
        large: {
          republicFleet: new ShipModule("Republic Fleet Large Rapid Missile Launcher", 400),
        }
      },
      medium: {
        republicFleet: new ShipModule("Republic Fleet Medium Missile Launcher", 49),
        ctype: new ShipModule("C-Type Medium Missile Launcher", 58),
      },
      large: {
        republicFleet: new ShipModule("Republic Fleet Large Missile Launcher", 494),
        ctype: new ShipModule("C-Type Large Missile Launcher", 590),
      }
    },
  },
  mid: {
    SFM: new ShipModule("Shield Field Module", 1),
    GroupBooster: new ShipModule("Group Shield / Armor Repairer / Capacitor Booster", 1),
    ewar: {
      web:  new ShipModule("Statis Webifier", 1),
      disruptor: new ShipModule("Warp Disruptor", 1),
      scrambler: {
        republicFleet: new ShipModule("Republic Fleet Warp Scrambler", 6),
        predator: new ShipModule("'Predator' Warp Scrambler", 7),
      },
      trackingDisruptor: new ShipModule("Tracking Disruptor", 1),
      targetPainter: new ShipModule("Target Painter", 1),
    },
    nosferatu: {
      small: {
        uspir: new ShipModule("'Uspir' Small Energy Nosferatu", 8),
        ImperialNavy: new ShipModule("Imperial Navy Small Energy Nosferatu", 9),
      },
      medium:{
        uspir: new ShipModule("'Uspir' Large Energy Nosferatu", 78),
        vrik: new ShipModule("'Vrykolakas' Medium Energy Nosferatu", 88),
      },
      large: {
        uspir: new ShipModule("'Uspir' Large Energy Nosferatu", 708),
        vrik: new ShipModule("'Vrykolakas' Large Energy Nosferatu", 793),
      }
    }
  },
  low: {
    cloak: new ShipModule("Cloaking Device", 1),
    shieldBooster: {
      small: {
        ctype: new ShipModule("C-Type Small Shield Booster", 6),
      },
      medium: {
        ctype: new ShipModule("C-Type Medium Shield Booster", 55),
      },
      large: {
        republicFleet: new ShipModule("Republic Fleet Large Shield Booster", 421),
        ctype: new ShipModule("C-Type Large Shield Booster", 502),
      }
    },
    shieldExtender: {
      medium: {
        republicFleet: new ShipModule("Republic Fleet Medium Shield Extender", 70),
      },
      large: {
        sherif: new ShipModule("'Sheriff' Large Shield Extender", 607),
        republicFleet: new ShipModule("Republic Fleet Large Shield Extender", 631),
      }
    },
    armorRepairer:{
      large: {
        imperialNavy: new ShipModule("Imperial Navy Large Armor Repairer", 842),
        ctype: new ShipModule("C-Type Large Armor Repairer", 1004),
      }
    },
    hardener:{
      adaptive: new ShipModule("Adaptive hardener", 1),
      reactive: new ShipModule("Reactive hardener", 1),
    },
    afterburner: {
      small: {
        ctype: new ShipModule("C-Type Small AfterBurner", 15),
      },
      medium: {
        republicFleet: new ShipModule("Republic Fleet Medium AfterBurner", 70),
        ctype: new ShipModule("C-Type Medium AfterBurner", 83),
      },
      large: {
        republicFleet: new ShipModule("Republic Fleet Large AfterBurner", 737),
      }
    },
    microwarpdrive: {
      medium: {
        mk5: new ShipModule("Mk5 Medium Microwarpdrive", 118),
        mk9: new ShipModule("Mk9 Medium Microwarpdrive", 129),
        republicFleet: new ShipModule("Republic Fleet Medium Microwarpdrive", 140),
        ctype: new ShipModule("C-Type Medium Microwarpdrive", 167),
      },
      large: {
        republicFleet: new ShipModule("Republic Fleet Large Microwarpdrive", 1263),
      }
    },
    capacitorBattery: {
      medium: {
        ctype: new ShipModule("C-Type Medium Capacitor Battery", 83),
      },
      large: {
        ctype: new ShipModule("C-Type Large Capacitor Battery", 753),
      }
    },
    weaponUpgrade: {
      laser: {
        ctype: new ShipModule("C-Type Heat Sink", 7),
      },
      missile: {
        republicFleet: new ShipModule("Republic Fleet Ballistic Control System", 6),
        ctype: new ShipModule("C-Type Ballistic Control System", 7),
      },
      guidance: {
        caldariNavy: new ShipModule("Caldari Navy Missile Guidance Computer", 93),
      },
      cannon: {
        ctype: new ShipModule("C-Type Gyrostabilizer", 7),
      },
      drone: {
        bat: new ShipModule("Bat Drone Damage Amplifier", 6),
      }
    }
  },
  rig: {
    combat: {
      antiEMScreenReinforcer(level){
        return new ShipModule(`Anti-EM Screen Reinforcer ${mkl(level)}`, 0);
      },
      warheadCalefactionCatalyst(level){
        return new ShipModule(`Warhead Calefaction Catalyst ${mkl(level)}`, 0);
      },
      bayLoadingAccelerator(level){
        return new ShipModule(`Bay Loading Accelerator ${mkl(level)}`, 0);
      },
      coreDefenseChargeEconomizer(level) {
        return new ShipModule(`Core Defense Charge Economizer ${mkl(level)}`, 0);
      },
      coreDefenseCapacitorSafeguard(level) {
        return new ShipModule(`Core Defense Capacitor Safeguard ${mkl(level)}`, 0);
      },
      coreDefenseFieldExtender(level) {
        return new ShipModule(`Core Defense Field Extender ${mkl(level)}`, 0);
      },
      droneFirepowerAugmentor(level){
        return new ShipModule(`Drone Firepower Augmentor ${mkl(level)}`, 0);
      },
      droneSpeedAugmentor(level){
        return new ShipModule(`Drone Speed Augmentor ${mkl(level)}`, 0);
      },
      auxiliaryNanoPump(level){
        return new ShipModule(`Auxiliary Nano Pump ${mkl(level)}`, 0);
      },
      hydraulicBayThrusters(level){
        return new ShipModule(`Hydraulic Bay Thrusters ${mkl(level)}`, 0);
      }
    },
    engineering: {
      ancillaryPowergridRouter(level) {
        return new ShipModule(`Ancillary Powergrid Router ${mkl(level)}`, 0);
      },
      semiconductorMemoryCell(level) {
        return new ShipModule(`Semiconductor Memory Cell ${mkl(level)}`, 0);
      },
      capacitorControlCircuit(level) {
        return new ShipModule(`Capacitor Control Circuit ${mkl(level)}`, 0);
      },
      auxiliaryThrusters(level){
        return new ShipModule(`Auxiliary Thrusters ${mkl(level)}`, 0);
      },
      polycarbonEngineHousing(level) {
        return new ShipModule(`Polycarbon Engine Housing ${mkl(level)}`, 0);
      },
      dynamicFuelValve(level) {
        return new ShipModule(`Dynamic Fuel Valve ${mkl(level)}`, 0);
      }
    }
  }
};