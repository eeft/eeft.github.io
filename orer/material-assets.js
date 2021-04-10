const { piKeys, piMap } = require("./pi");
const { oreKeys, oreMap } = require("./ore");
const min = require("./mineral");
const readableNumber = require("./readable-number");

function assets(){
  let total = 0;

  const pi = {
    // [piKeys.LusteringAlloy]: 115547,
    // [piKeys.SheenCompound]: 134506,
    // [piKeys.GleamingAlloy]: 76581,
    // [piKeys.CondensedAlloy]: 142835,
    // [piKeys.PreciousAlloy]: 106844,
    // [piKeys.MotleyCompound]: 92436,
    // [piKeys.FiberComposite]: 82023,
    // [piKeys.LucentCompound]: 420,
    // [piKeys.OpulentCompound]: 123503,
    // [piKeys.BaseMetals]: 2411,
    // [piKeys.HeavyMetals]: 103986,
    // [piKeys.NobleMetals]: 29063,
    // [piKeys.ReactiveMetals]: 16433,
    // [piKeys.ToxicMetals]: 79007,
    // [piKeys.SupertensilePlastics]: 309238,
    [piKeys.SilicateGlass]: 2284
  };

  const rawOres = {
    // [oreKeys.Veldspar]: 66,
    // [oreKeys.Scordite]: 3,
    // [oreKeys.Pyroxeres]: 0,
    // [oreKeys.Jaspet]: 1138,
    // [oreKeys.Hemrophite]: 97, 
    // [oreKeys.Hedbergite]: 2934,
    // [oreKeys.Spodumain]: 65,
    // [oreKeys.DarkOchre]: 9,
    // [oreKeys.Gneiss]: 8283,
    // [oreKeys.Crokite]: 9,
    // [oreKeys.Bisot]: 2593,
    // [oreKeys.Arkonor]: 457,
    // [oreKeys.Mercoxit]: 1211,
  };

  const minerals = {
    // [min.mineralTypes.Tritanium]: 1540290,
    // [min.mineralTypes.Pyerite]: 323856,
    // [min.mineralTypes.Mexallon]: 730109,
    // [min.mineralTypes.Isogen]: 140741,
    // [min.mineralTypes.Nocxium]: 1953,
    // [min.mineralTypes.Zydrine]: 31894,
    // [min.mineralTypes.Megacyte]: 9049,
  };

  for (const key in pi) {
    const quantity = pi[key];
    const info = piMap.get(key);

    total += quantity * info.value;
  }

  for (const key in rawOres) {
    const quantity = rawOres[key];
    const ore = oreMap.get(key);
    
    total += quantity * ore.value;
  }

  for (const key in minerals) {
    const quantity = minerals[key];
    const m = new min[key]();

    total += quantity * m.value ;
  }

  return total;
}

console.log("Total Material assets: ", readableNumber(assets()));