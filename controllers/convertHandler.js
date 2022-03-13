function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
  
    const split = String(input).split('/')
    if (split.length === 1) {
      result = parseFloat(split[0])
    } else if (split.length === 2) {
      result = parseFloat(split[0]) / parseFloat(split[1])
    } else if (split.length > 2) {
      result = 'ERROR'
    }

    if(result !== 'ERROR' && isNaN(result)) {
      result = 1
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result = 'ERROR';
    let test = /(\dgal$)|(\dl$)|(\dlbs$)|(\dkg$)|(\dmi$)|(\dkm$)/.test(input)
    
    if (test) {
      result = /(gal$)|(l$)|(lbs$)|(kg$)|(mi$)|(km$)/.exec(input)
      if (result) {
        result = result.shift()
      } 
    } 
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = 'l'
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch(unit) {
      case 'gal':
        result = 'gallons'
        break
      case 'l':
        result = 'liters'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = Math.round((initNum / galToL) * 100000) / 100000
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = Math.round((initNum / lbsToKg) * 1000000) / 1000000
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = Math.round((initNum / miToKm) * 100000) / 100000
        break
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
