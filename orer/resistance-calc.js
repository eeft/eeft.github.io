class ResistanceType {
  /**
   * @param {string} name 
   * @param {number} value 
   */
  constructor(name, value){
    this.name = name;
    this.values = [ value ];
    this.maxValue = 100;
  }

  add(value){
    this.values.push(value);

    return this;
  }

  getValue(){
    let total = 0;

    this.values.sort((a,b) => a - b);

    for (const value of this.values) {
      total += ((this.maxValue - total) / 100) * value;
    }

    return total;
  }

  dmr(num){
    switch (num) {
      case 1:
        this.maxValue = 87.5;
        break;
      
      default:
        break;
    }

    return this;
  }
}

const TYPES = {
  EM: "EM",
  THERMAL: "THERMAL",
  KINETIC: "KINETIC",
  EXPOSIVE: "EXPOSIVE",
};

class ResistanceProfile{
  /**
   * 
   * @param  {...ResistanceType} resistanceTypes
   */
  constructor(...resistanceTypes){
    this.resistanceTypes = resistanceTypes;
  }

  /**
   * @param {ResistanceProfile} resistanceProfile 
   */
  add(resistanceProfile){

    for (const resistanceType of resistanceProfile.resistanceTypes) {
      this.addType(resistanceType.name, resistanceType.getValue());
    }

    return this;
  }

  addType(name, value){
    const type = this.resistanceTypes.find(_ => _.name === name);

    if(type){
      type.add(value);
    }

    return this;
  }

  dmr(num){

    for (const resistanceType of this.resistanceTypes) {
      resistanceType.dmr(num);
    }

    return this;
  }

  ehp(hp, resistancePercentage){
    return (hp / (1 - (resistancePercentage/100)));
  }

  getAverageResistances(){
    let total = 0;

    for (const resistanceType of this.resistanceTypes) {
      total += resistanceType.getValue();
    }

    return total / this.resistanceTypes.length;
  }

  printResistances(){
    let total = 0;

    for (const resistanceType of this.resistanceTypes) {
      const value = resistanceType.getValue();
      console.log(`${resistanceType.name}: ${value}`);
      total += value;
    }

    console.log("AVERAGE: " + total / this.resistanceTypes.length);

    return this;
  }

  /**
   * @param {number} repair 
   * @param {number} activation 
   */
  printEffectiveHpS(repair, activation){
    const ehps = this.ehp(repair / activation, this.getAverageResistances());

    console.log(`EHP/S: ${ehps}`);

    return this;
  }
}

class BaseResistanceProfile extends ResistanceProfile{
  constructor(em = 0, thermal = 0, kinetic = 0, explosive = 0){
    super(
      new ResistanceType(TYPES.EM, em),
      new ResistanceType(TYPES.THERMAL, thermal),
      new ResistanceType(TYPES.KINETIC, kinetic),
      new ResistanceType(TYPES.EXPOSIVE, explosive),
    );
  }
}

class HullResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(33.33, 33.33, 33.33, 33.33);
  }
}

class CaldariShieldResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(0, 28, 40, 50);
  }
}

class CaldariArmorResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(50, 44.75, 25, 10);
  }
}

class GalenteShieldResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(0, 20, 46, 50);
  }
}

class GalenteArmorResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(50, 35, 36.25, 10);
  }
}

class AmarrShieldResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(0, 20, 40, 55);
  }
}

class AmarrArmorResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(50, 35, 25, 20);
  }
}

class MinmatarShieldResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(10, 20, 40, 50);
  }
}

class MinmatarArmorResistanceProfile extends BaseResistanceProfile{
  constructor(){
    super(60, 35, 25,10);
  }
}

class HardenerResistanceProfile extends BaseResistanceProfile{
  constructor(value, dmr){
    super(value, value, value, value);
    if(dmr) this.dmr(dmr);
  }
}

class RigResistanceProfile extends ResistanceProfile{
  constructor(type, value, dmr){
    super(new ResistanceType(type, value));
    if(dmr) this.dmr(dmr);
  }
}

module.exports = {
  ResistanceType,
  ResistanceProfile,
  BaseResistanceProfile,
  CaldariShieldResistanceProfile,
  CaldariArmorResistanceProfile,
  GalenteShieldResistanceProfile,
  GalenteArmorResistanceProfile,
  AmarrShieldResistanceProfile,
  AmarrArmorResistanceProfile,
  MinmatarShieldResistanceProfile,
  MinmatarArmorResistanceProfile,
  HullResistanceProfile,
  HardenerResistanceProfile,
  RigResistanceProfile,
};

new AmarrArmorResistanceProfile()
  // .add(new BaseResistanceProfile(20, 20, 20, 20))
  .add(new HardenerResistanceProfile(21.89))
  .add(new HardenerResistanceProfile(21.89, 1))
  .add(new HardenerResistanceProfile(14.59))
  // .add(new RigResistanceProfile(TYPES.EXPOSIVE, 40))
  .printResistances()
  .printEffectiveHpS((548 * 2) * (1.375 + 0.30), 9 * (1 - 0.29))

// 1 = 36.49 | 2 = 57
// dmir 1 = 87.5%