const minerals = require("./mineral");
const { mineralEfficiency } = require("./ore");

const SIZE_MODIFIER = {
  large: 16.00127632418634,
  medium: 4.000319081046586,
  small: 1,
};

const BASE = {
  0: 500,
  1: 397,
  2: 1119,
  3: 2128,
  4: 3134,
  5: 4896,
}

const PYRITE_DERVIATION_CONSTANT = 0.242;
const MEXALLON_DERVIATION_CONSTANT = 0.0806045340050378;
const ISOGEN_DERVIATION_CONSTANT = 0.0125944584382872;
const NOCXIUM_DERVIATION_CONSTANT = 0.0035746201966041;
const ZYDRINE_DERVIATION_CONSTANT = 0.0012763241863433;
const MEGACYTE_DERVIATION_CONSTANT = 6.381620931716656e-4;

class Module {
  constructor(name, metalevel = 0, sizeModifier = 1, qualityModifier = 1){
    this.name = name;
    this.metalevel = metalevel;
    this.sizeModifier = sizeModifier;
    this.qualityModifier = qualityModifier;
    this.baseRefineEfficiency = null;

    this.minerals = [];
  }

  /**
   * @param {number} value 
   */
  setBaseRefineEfficiency(value){
    this.baseRefineEfficiency = value || null;
  }

  setMineralsFromMetalevel(level){
    const baseValue = BASE[level];

    this.minerals.push(
      new minerals.Tritanium(mineralEfficiency(baseValue, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Pyerite(mineralEfficiency(baseValue * PYRITE_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Mexallon(mineralEfficiency(baseValue * MEXALLON_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Isogen(mineralEfficiency(baseValue * ISOGEN_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Nocxium(mineralEfficiency(baseValue * NOCXIUM_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Zydrine(mineralEfficiency(baseValue * ZYDRINE_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
      new minerals.Megacyte(mineralEfficiency(baseValue * MEGACYTE_DERVIATION_CONSTANT, 100) * this.sizeModifier * this.qualityModifier),
    );

    switch (level) {
      case 0:
        this.minerals.push(
          new minerals.Tritanium(mineralEfficiency(baseValue, 100) * this.qualityModifier),
          new minerals.Pyerite(mineralEfficiency(121, 100) * this.qualityModifier)
        );
        break;
      case 1: 
        this.minerals.push(
          new minerals.Tritanium(mineralEfficiency(397, 100) * this.qualityModifier),
          new minerals.Pyerite(mineralEfficiency(96, 100) * this.qualityModifier),
          new minerals.Mexallon(mineralEfficiency(32, 100) * this.qualityModifier),
          new minerals.Isogen(mineralEfficiency(5, 100) * this.qualityModifier)
        );
        break;
      case 2:
        this.minerals.push(
          new minerals.Tritanium(mineralEfficiency(570, 51) * this.qualityModifier),
          new minerals.Pyerite(mineralEfficiency(138, 51) * this.qualityModifier),
          new minerals.Mexallon(mineralEfficiency(46, 51) * this.qualityModifier),
          new minerals.Isogen(mineralEfficiency(8, 51) * this.qualityModifier),
          new minerals.Nocxium(mineralEfficiency(2, 51) * this.qualityModifier),
        );
        break;
      case 5:
        this.minerals.push(
          new minerals.Tritanium(mineralEfficiency(2497, 51) * this.qualityModifier),
          new minerals.Pyerite(mineralEfficiency(605, 51) * this.qualityModifier),
          new minerals.Mexallon(mineralEfficiency(206, 51) * this.qualityModifier),
          new minerals.Isogen(mineralEfficiency(36, 51) * this.qualityModifier),
          new minerals.Nocxium(mineralEfficiency(10, 51) * this.qualityModifier),
          new minerals.Zydrine(mineralEfficiency(3.5, 51) * this.qualityModifier),
          new minerals.Megacyte(mineralEfficiency(1.5, 51) * this.qualityModifier),
        );
        break;
      default:
        break;
    }
  }
}

console.log([
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(500, 100)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(121, 100)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(500 * PYRITE_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    meta: 0
  },
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(397, 100)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(96, 100)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(397 * PYRITE_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    Mexallon: new minerals.Mexallon(mineralEfficiency(32, 100)).baseRefineEfficiency,
    derivedMexallon: new minerals.Pyerite(mineralEfficiency(397 * MEXALLON_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    Isogen: new minerals.Isogen(mineralEfficiency(5, 100)).baseRefineEfficiency,
    derivedIsogen: new minerals.Isogen(mineralEfficiency(397 * ISOGEN_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    meta: 1
  },
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(1119, 100)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(271, 100)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(1119 * PYRITE_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    Mexallon: new minerals.Mexallon(mineralEfficiency(92, 100)).baseRefineEfficiency,
    Isogen: new minerals.Isogen(mineralEfficiency(16, 100)).baseRefineEfficiency,
    Nocxium: new minerals.Nocxium(mineralEfficiency(4, 100)).baseRefineEfficiency,
    meta: 2
  },
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(2128, 100)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(515, 100)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(2128 * PYRITE_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    Mexallon: new minerals.Mexallon(mineralEfficiency(176, 100)).baseRefineEfficiency,
    Isogen: new minerals.Isogen(mineralEfficiency(31, 100)).baseRefineEfficiency,
    Nocxium: new minerals.Nocxium(mineralEfficiency(8, 100)).baseRefineEfficiency,
    meta: 3
  },
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(3134, 100)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(759, 100)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(3134 * PYRITE_DERVIATION_CONSTANT, 100)).baseRefineEfficiency,
    Mexallon: new minerals.Mexallon(mineralEfficiency(259, 100)).baseRefineEfficiency,
    Isogen: new minerals.Isogen(mineralEfficiency(45, 100)).baseRefineEfficiency,
    Nocxium: new minerals.Nocxium(mineralEfficiency(12, 100)).baseRefineEfficiency,
    Zydrine: new minerals.Zydrine(mineralEfficiency(4, 100)).baseRefineEfficiency,
    Megacyte: new minerals.Megacyte(mineralEfficiency(2, 100)).baseRefineEfficiency,
    meta: 4
  },
  {
    Tritanium: new minerals.Tritanium(mineralEfficiency(2497, 51)).baseRefineEfficiency,
    Pyerite: new minerals.Pyerite(mineralEfficiency(605, 51)).baseRefineEfficiency,
    derivedPyerite: new minerals.Pyerite(mineralEfficiency(2497 * PYRITE_DERVIATION_CONSTANT, 51)).baseRefineEfficiency,
    Mexallon: new minerals.Mexallon(mineralEfficiency(206, 51)).baseRefineEfficiency,
    Isogen: new minerals.Isogen(mineralEfficiency(36, 51)).baseRefineEfficiency,
    Nocxium: new minerals.Nocxium(mineralEfficiency(10, 51)).baseRefineEfficiency,
    Zydrine: new minerals.Zydrine(mineralEfficiency(3.5, 51)).baseRefineEfficiency,
    Megacyte: new minerals.Megacyte(mineralEfficiency(1.5, 51)).baseRefineEfficiency,
    meta: 5
  },
]);

module.exports = {
  moduleSize,
  Module,
};