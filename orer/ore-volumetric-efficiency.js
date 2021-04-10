const { oreTypes } = require("./ore");

function volumetricEfficiency(){
  const output = [];

  for (const ore in oreTypes) {
    const info = oreTypes[ore];
    const out = { name: info.name };
  
    for (const mineral of info.minerals) {
      const veff = ((1 * mineral.baseRefineEfficiency) / info.volume)
      out[mineral.name] = (veff / 100).toFixed(5);
    }

    output.push(out);
  }

  return output;
}

console.log(volumetricEfficiency());