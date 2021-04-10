const types = {
  Tritanium: "Tritanium",
  Pyerite: "Pyerite",
  Mexallon: "Mexallon",
  Isogen: "Isogen",
  Nocxium: "Nocxium",
  Zydrine: "Zydrine",
  Megacyte: "Megacyte",
  Morphite: "Morphite",
};

class Mineral {
  constructor(name, value){
    this.name = name;
    this.value = value;
    this.baseRefineEfficiency = null;
  }

  /**
   * @param {number} value 
   */
  setBaseRefineEfficiency(value){
    this.baseRefineEfficiency = value || null;
  }
}

class Tritanium extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Tritanium, 1.87);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Pyerite extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Pyerite, 16.82);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Mexallon extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Mexallon, 22.43);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Isogen extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Isogen, 76.64);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Nocxium extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Nocxium, 1028.04);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Zydrine extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Zydrine, 1214.95);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Megacyte extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Megacyte, 2242.99);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

class Morphite extends Mineral {
  constructor(baseRefineEfficiency){
    super(types.Morphite, 1869.16);

    this.setBaseRefineEfficiency(baseRefineEfficiency);
  }
}

module.exports = {
  mineralTypes: types,
  Mineral,
  Tritanium,
  Pyerite,
  Mexallon,
  Isogen,
  Nocxium,
  Zydrine,
  Megacyte,
  Morphite,
};