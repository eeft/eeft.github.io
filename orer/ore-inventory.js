const { oreMap, oreKeys } = require("./ore");

function oreOutput(oreAmount, efficiency, oreType){
  if(!oreKeys[oreType]) return `Unknown Ore type "${oreType}"`;
  if(isNaN(parseFloat(efficiency))) return `Invalid Efficiency value "${efficiency}", expected be a float or integer between 30 and 60`;
  if(isNaN(parseInt(oreAmount))) return `Ore amount must be an integer`;

  const ore = oreMap.get(oreType);
  const output = {};

  for (const mineral of ore.minerals) {
    const eff = parseFloat(efficiency) / 100;
    const oreAmont = Math.round(oreAmount * (mineral.baseRefineEfficiency * eff));
    
    output[mineral.name] = oreAmont;
  }

  return output;
}

function calculateInventory(inventory = {}){
  const inventoryTotal = {};
  
  for (const key in inventory) {
    const [ amount, refEff ] = inventory[key];
    const refiningOutput = oreOutput(amount, refEff, key);

    for (const refkey in refiningOutput) {
      const value = refiningOutput[refkey];

      if(inventoryTotal[refkey]) inventoryTotal[refkey] += value;
      else inventoryTotal[refkey] = value;
    }
  }

  return inventoryTotal;
}

function printInventory(inventory = {}){
  for (const key in inventory) {
    const [ amount, eff ] = inventory[key];

    console.log(`${key}: ${amount} efficiency ${eff}%`);
  }
}

const inventory = {
  [oreKeys.Veldspar]:[230000, 61.5],
  [oreKeys.Scordite]:[120000, 61.5],
  [oreKeys.Pyroxeres]:[47600, 61.5],
  [oreKeys.Jaspet]:[1800, 61.5],
  [oreKeys.Hemrophite]:[4200, 61.5],
  [oreKeys.Hedbergite]:[3900, 61.5],
  [oreKeys.Spodumain]: [11500, 61.5],
  [oreKeys.DarkOchre]: [2100, 61.5],
  [oreKeys.Gneiss]: [16700, 61.5],
  [oreKeys.Crokite]:[2900, 61.5],
  [oreKeys.Bisot]: [3700, 61.5],
  [oreKeys.Arkonor]: [9400, 61.5],
  // [oreKeys.Mercoxit]: [11600, 61.5],
};

printInventory(inventory);
console.log(calculateInventory(inventory));