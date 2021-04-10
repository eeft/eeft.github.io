const { Mineral } = require("./mineral");
const minerals = require("./mineral");

const types = {
  Veldspar: "Veldspar",
  Plagioclase: "Plagioclase",
  Scordite: "Scordite",
  Omber: "Omber",
  Kernite: "Kernite",
  Pyroxeres: "Pyroxeres",
  DarkOchre: "DarkOchre",
  Gneiss: "Gneiss",
  Spodumain: "Spodumain",
  Hemrophite: "Hemrophite",
  Hedbergite: "Hedbergite",
  Jaspet: "Jaspet",
  Crokite: "Crokite",
  Bisot: "Bisot",
  Arkonor: "Arkonor",
  Mercoxit: "Mercoxit",
};

function mineralEfficiency(output, efficiency){
  const eff = efficiency / 100;

  return (output / eff) / 100;
}

class Ore {

  /**
   * 
   * @param {string} name 
   * @param {number} value 
   * @param {number} volume 
   * @param  {...Mineral} minerals 
   */
  constructor(name, value, volume, ...minerals){
    this.name = name;
    this.value = value;
    this.volume = volume;

    this.minerals = minerals;
  }

  /** @param {number} efficiency */
  getRefinedValue(efficiency){
    const eff = efficiency / 100;
    let value = 0;

    for (const mineral of this.minerals) {
      const output = Math.floor(100 * (mineral.baseRefineEfficiency * eff));
      value += (output / 100) * mineral.value;
    }

    return value;
  }
}

const oreTypes = {
  [types.Veldspar]: new Ore(types.Veldspar, 3.73, 0.1, new minerals.Tritanium(mineralEfficiency(174, 42))),
  [types.Plagioclase]: new Ore(types.Plagioclase, 16.09, 0.35, 
    new minerals.Tritanium(mineralEfficiency(21.42, 42)),
    new minerals.Pyerite(mineralEfficiency(27.3, 42)),
    new minerals.Mexallon(mineralEfficiency(40.74, 42)),
  ),
  [types.Scordite]: new Ore(types.Scordite, 10.70, 0.15,
    new minerals.Tritanium(mineralEfficiency(68.04, 42)),
    new minerals.Pyerite(mineralEfficiency(48.3, 42)),
  ),
  [types.Omber]: new Ore(types.Omber, 31.64, 0.6,
    new minerals.Tritanium(mineralEfficiency(315, 52.5)),
    new minerals.Pyerite(mineralEfficiency(39.9, 52.5)),
    new minerals.Isogen(mineralEfficiency(28.88, 52.5)),
  ),
  [types.Kernite]: new Ore(types.Kernite, 71.49, 1.2,
    new minerals.Tritanium(mineralEfficiency(140, 52.5)),
    new minerals.Mexallon(mineralEfficiency(252, 52.5)),
    new minerals.Isogen(mineralEfficiency(25.2, 52.5)),
  ),
  [types.Pyroxeres]: new Ore(types.Pyroxeres, 235.11, 1.5,
    new minerals.Tritanium(mineralEfficiency(921, 52.5)),
    new minerals.Pyerite(mineralEfficiency(294, 52.5)),
    new minerals.Mexallon(mineralEfficiency(131, 52.5)),
    new minerals.Nocxium(mineralEfficiency(15.75, 52.5)),
  ),
  [types.DarkOchre]: new Ore(types.DarkOchre, 240.60, 1.6,
    new minerals.Tritanium(mineralEfficiency(504, 52.5)),
    new minerals.Isogen(mineralEfficiency(29.4, 52.5)),
    new minerals.Nocxium(mineralEfficiency(22.57, 52.5)),
  ),
  [types.Gneiss]: new Ore(types.Gneiss, 237.00, 2,
    new minerals.Pyerite(mineralEfficiency(436, 49.5)),
    new minerals.Mexallon(mineralEfficiency(455, 49.5)),
    new minerals.Isogen(mineralEfficiency(91.08, 49.5)),
  ),
  [types.Spodumain]: new Ore(types.Spodumain, 537.78, 3.2,
    new minerals.Tritanium(mineralEfficiency(9752, 49.5)),
    new minerals.Pyerite(mineralEfficiency(1851, 49.5)),
    new minerals.Mexallon(mineralEfficiency(178, 49.5)),
    new minerals.Isogen(mineralEfficiency(29.7, 49.5)),
  ),
  [types.Hemrophite]: new Ore(types.Hemrophite, 462.39, 3,
    new minerals.Tritanium(mineralEfficiency(2723, 49.5)),
    new minerals.Isogen(mineralEfficiency(79.2, 49.5)),
    new minerals.Nocxium(mineralEfficiency(6.43, 49.5)),
    new minerals.Zydrine(mineralEfficiency(24.75, 49.5)),
  ),
  [types.Hedbergite]: new Ore(types.Hedbergite, 513.99, 3,
    new minerals.Pyerite(mineralEfficiency(1147, 42)),
    new minerals.Isogen(mineralEfficiency(193, 42)),
    new minerals.Nocxium(mineralEfficiency(3.78, 42)),
    new minerals.Zydrine(mineralEfficiency(5.88, 42)),
  ),
  [types.Jaspet]: new Ore(types.Jaspet, 825.53, 4,
    new minerals.Mexallon(mineralEfficiency(1033, 42)),
    new minerals.Nocxium(mineralEfficiency(20.16, 42)),
    new minerals.Zydrine(mineralEfficiency(23.52, 42)),
  ),
  [types.Crokite]: new Ore(types.Crokite, 1367.24, 6.4,
    new minerals.Tritanium(mineralEfficiency(16296, 42)),
    new minerals.Nocxium(mineralEfficiency(39.48, 42)),
    new minerals.Zydrine(mineralEfficiency(40.32, 42)),
  ),
  [types.Bisot]: new Ore(types.Bisot, 1549.48, 6.4,
    new minerals.Pyerite(mineralEfficiency(1836, 30)),
    new minerals.Zydrine(mineralEfficiency(10.8, 30)),
    new minerals.Megacyte(mineralEfficiency(23.7, 30)),
  ),
  [types.Arkonor]: new Ore(types.Arkonor, 1301.96, 6.4,
    new minerals.Tritanium(mineralEfficiency(2640, 30)),
    new minerals.Mexallon(mineralEfficiency(300, 30)),
    new minerals.Megacyte(mineralEfficiency(31.2, 30)),
  ),
  [types.Mercoxit]: new Ore(types.Mercoxit, 536.52, 8,
    new minerals.Morphite(mineralEfficiency(18, 30)),
  ),
};

/**
 * @type {Map<string, Ore>}
 */
const oreMap = new Map();

oreMap.set(types.Veldspar, oreTypes[types.Veldspar]);
oreMap.set(types.Plagioclase, oreTypes[types.Plagioclase]);
oreMap.set(types.Scordite, oreTypes[types.Scordite]);
oreMap.set(types.Omber, oreTypes[types.Omber]);
oreMap.set(types.Kernite, oreTypes[types.Kernite]);
oreMap.set(types.Pyroxeres, oreTypes[types.Pyroxeres]);
oreMap.set(types.DarkOchre, oreTypes[types.DarkOchre]);
oreMap.set(types.Gneiss, oreTypes[types.Gneiss]);
oreMap.set(types.Spodumain, oreTypes[types.Spodumain]);
oreMap.set(types.Hemrophite, oreTypes[types.Hemrophite]);
oreMap.set(types.Hedbergite, oreTypes[types.Hedbergite]);
oreMap.set(types.Jaspet, oreTypes[types.Jaspet]);
oreMap.set(types.Crokite, oreTypes[types.Crokite]);
oreMap.set(types.Bisot, oreTypes[types.Bisot]);
oreMap.set(types.Arkonor, oreTypes[types.Arkonor]);
oreMap.set(types.Mercoxit, oreTypes[types.Mercoxit]);

module.exports = {
  oreMap,
  oreKeys: types,
  oreTypes,
  Ore,
  mineralEfficiency,
}