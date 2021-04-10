
const types = {
  LusteringAlloy: "Lustering Alloy",
  SheenCompound:"Sheen Compound",
  GleamingAlloy: "Gleaming Alloy",
  CondensedAlloy:"Condensed Alloy",
  PreciousAlloy: "Precious Alloy",
  MotleyCompound: "Motley Compound",
  FiberComposite: "Fiber Composite",
  LucentCompound: "Lucent Compound",
  OpulentCompound: "Opulent Compound",
  BaseMetals: "Base Metals",
  HeavyMetals: "Heavy Metals",
  NobleMetals: "Noble Metals",
  ReactiveMetals: "Reactive Metals",
  ToxicMetals: "Toxic Metals",
  SupertensilePlastics: "Supertensile Plastics",
  ReactiveGas: "Reactive Gas",
  NobleGas: "Noble Gas",
  IndustrialFibers: "Industrial Fibers",
  Polyaramids: "Polyaramids",
  Coolant: "Coolant",
  Condensates: "Condensates",
  ConstructionBlocks: "Construction Blocks",
  Nanites: "Nanites",
  SilicateGlass: "Silicate Glass",
  SmartfabUnits: "Smartfab Units",
};

class Pi {
  constructor(name, value){
    this.name = name;
    this.value = value;
  }
}

const piTypes = {
  [types.LusteringAlloy]: new Pi(types.LusteringAlloy, 203.74),
  [types.SheenCompound]: new Pi(types.SheenCompound, 196.26),  
  [types.GleamingAlloy]: new Pi(types.GleamingAlloy, 191.59), 
  [types.CondensedAlloy]: new Pi(types.CondensedAlloy, 200.93),  
  [types.PreciousAlloy]: new Pi(types.PreciousAlloy, 303.74), 
  [types.MotleyCompound]: new Pi(types.MotleyCompound, 177.57), 
  [types.FiberComposite]: new Pi(types.FiberComposite, 95.33), 
  [types.LucentCompound]: new Pi(types.LucentCompound, 154.21), 
  [types.OpulentCompound]: new Pi(types.OpulentCompound, 168.22), 
  [types.BaseMetals]: new Pi(types.BaseMetals, 141.12), 
  [types.HeavyMetals]: new Pi(types.HeavyMetals, 272.90), 
  [types.NobleMetals]: new Pi(types.NobleMetals, 175.70), 
  [types.ReactiveMetals]: new Pi(types.ReactiveMetals, 755.14), 
  [types.ToxicMetals]: new Pi(types.ToxicMetals, 841.12), 
  [types.ReactiveGas]: new Pi(types.ReactiveGas, 140.19),
  [types.NobleGas]: new Pi(types.NobleGas, 74.77),
  [types.IndustrialFibers]: new Pi(types.IndustrialFibers, 252.34),
  [types.SupertensilePlastics]: new Pi(types.SupertensilePlastics, 308.41),
  [types.Polyaramids]: new Pi(types.Polyaramids, 140.19),
  [types.Coolant]: new Pi(types.Coolant, 191.59),
  [types.Condensates]: new Pi(types.Condensates, 205.61),
  [types.ConstructionBlocks]: new Pi(types.ConstructionBlocks, 285.98),
  [types.Nanites]: new Pi(types.Nanites, 313.08),
  [types.SilicateGlass]: new Pi(types.SilicateGlass, 299.07),
  [types.SmartfabUnits]: new Pi(types.SmartfabUnits, 289.72),
}

/**
 * @type {Map<string, Pi>}
 */
const piMap = new Map();

piMap.set(types.LusteringAlloy, piTypes[types.LusteringAlloy]);
piMap.set(types.SheenCompound, piTypes[types.SheenCompound]);
piMap.set(types.GleamingAlloy, piTypes[types.GleamingAlloy]);
piMap.set(types.CondensedAlloy, piTypes[types.CondensedAlloy]);
piMap.set(types.PreciousAlloy, piTypes[types.PreciousAlloy]);
piMap.set(types.MotleyCompound, piTypes[types.MotleyCompound]);
piMap.set(types.FiberComposite, piTypes[types.FiberComposite]);
piMap.set(types.LucentCompound, piTypes[types.LucentCompound]);
piMap.set(types.OpulentCompound, piTypes[types.OpulentCompound]);
piMap.set(types.BaseMetals, piTypes[types.BaseMetals]);
piMap.set(types.HeavyMetals, piTypes[types.HeavyMetals]);
piMap.set(types.NobleMetals, piTypes[types.NobleMetals]);
piMap.set(types.ReactiveMetals, piTypes[types.ReactiveMetals]);
piMap.set(types.ToxicMetals, piTypes[types.ToxicMetals]);
piMap.set(types.SupertensilePlastics, piTypes[types.SupertensilePlastics]);
piMap.set(types.ReactiveGas, piTypes[types.ReactiveGas]);
piMap.set(types.NobleGas, piTypes[types.NobleGas]);
piMap.set(types.IndustrialFibers, piTypes[types.IndustrialFibers]);
piMap.set(types.Polyaramids, piTypes[types.Polyaramids]);
piMap.set(types.Coolant, piTypes[types.Coolant]);
piMap.set(types.Condensates, piTypes[types.Condensates]);
piMap.set(types.ConstructionBlocks, piTypes[types.ConstructionBlocks]);
piMap.set(types.Nanites, piTypes[types.Nanites]);
piMap.set(types.SilicateGlass, piTypes[types.SilicateGlass]);
piMap.set(types.SmartfabUnits, piTypes[types.SmartfabUnits]);

module.exports = {
  piMap,
  piTypes,
  piKeys: types,
  Pi,
}