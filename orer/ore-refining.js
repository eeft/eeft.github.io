const { oreMap, oreKeys } = require("./ore");

function oreOutput(oreAmount, efficiency, oreType){
  if(!oreKeys[oreType]) return `Unknown Ore type "${oreType}"`;
  if(isNaN(parseFloat(efficiency))) return `Invalid Efficiency value "${efficiency}", expected be a float or integer between 30 and 60`;
  if(isNaN(parseInt(oreAmount))) return `Ore amount must be an integer`;

  const ore = oreMap.get(oreType);
  const output = { total: 0 };

  for (const mineral of ore.minerals) {
    const eff = parseFloat(efficiency) / 100;
    const oreAmont = Math.round(oreAmount * (mineral.baseRefineEfficiency * eff));
    
    output[mineral.name] = oreAmont;
    output.total += oreAmont;
  }

  output.efficiency = efficiency + "%";

  return output;
}
const args = process.argv;


console.log(oreOutput(args[3], args[4], args[2]));