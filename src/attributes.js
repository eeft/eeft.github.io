(function(window) {
  const { DEFAULT_NAME, DEFAULT_PLACEHOLDER } = window.CONST;
  
  class BaseAttribute {
    constructor(name = DEFAULT_NAME, description = DEFAULT_PLACEHOLDER){
      this.name = name;
      this.description = description;
    }
  }

  window = window || {};
  window.Attributes = {
    BaseAttribute: BaseAttribute,
  };

}(window));  
