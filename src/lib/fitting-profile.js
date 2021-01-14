
export class FittingProfile {
  constructor(){
    this.playerProfile = null;
    this.shipProfile = null;

    this.high = [];
    this.mid = [];
    this.low = [];

    this.combatRigs = [];
    this.engineeringRigs = [];
  }

  setPlayerProfile(profile){
    this.playerProfile = profile;
  }

  setShipProfile(profile){
    this.shipProfile = profile;
  }

  addModule(moduleArray, module, index){
    this.verifyModuleSlot(moduleArray, index);

    moduleArray[index] = module;
  }

  removeModule(moduleArray, index){
    this.verifyModuleSlot(moduleArray, index);

    moduleArray[index] = null;
  }

  addHighSlotModule(module, index){
    this.addModule(this.high, module, index);
  }
  
  addMidSlotModule(module, index){
    this.addModule(this.mid, module, index);
  }
  
  addLowSlotModule(module, index){
    this.addModule(this.low, module, index);
  }

  addCombatRig(module, index){
    this.addModule(this.combatRigs, module, index);
  }

  addEngineeringRig(module, index){
    this.addModule(this.engineeringRigs, module, index);
  }

  removeHighSlotModule(index){
    this.removeModule(this.high, index);
  }
  
  removeMidSlotModule(index){
    this.removeModule(this.mid, index);
  }

  removeLowSlotModule(index){
    this.removeModule(this.low, index);
  }

  removeCombatRig(index){
    this.removeModule(this.combatRigs, index);
  }

  removeEngineeringRig(index){
    this.removeModule(this.engineeringRigs, index);
  }

  verifyModuleSlot(moduleArray, index){
    if (moduleArray[index] === undefined) throw new Error("Invalid Module slot");
  }

  exportProfile(){
    return {
      ship: this.shipProfile ? this.shipProfile.name : null,
      high: this.high,
      mid: this.mid,
      low: this.low,
      cr: this.combatRigs,
      er: this.engineeringRigs,
    };
  }

  importShipProfile(name){
    
  }

  importProfile(profile){
    this.importShipProfile(profile.ship);

  }
}