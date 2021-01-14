(function(window) {
  const { DEFAULT_NAME } = window.CONST;

  class BaseShip {
    constructor(name = DEFAULT_NAME, powergrid = 0, scanResolution = 0, sigRad = 0){
      this.name = name;
      this.powergrid = powergrid;
      this.scanResolution = scanResolution;
      this.signatureRadius = sigRad;
    }
  }

  window = window || {};
  window.Ships = {
    BaseShip: BaseShip,
  };

}(window));