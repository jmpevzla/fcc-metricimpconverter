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
    input = input.toLowerCase()
    
    let test = /\d(gal|l|lbs|kg|mi|km)$/.test(input)

    if (!test) {
      test = /^(gal|l|lbs|kg|mi|km)$/.test(input)
    }

    if (test) {
      result = /(gal$)|(l$)|(lbs$)|(kg$)|(mi$)|(km$)/.exec(input)
      if (result) {
        result = result.shift()
        result = result === 'l' ? 'L' : result
      } 
    } 
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'L':
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
      case 'L':
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

    function round(number) {
      return Math.round(number * 100000) / 100000
    }

    switch(initUnit) {
      case 'gal':
        result = round(initNum * galToL)
        break
      case 'L':
        result = round(initNum / galToL)
        break
      case 'lbs':
        result = round(initNum * lbsToKg)
        break
      case 'kg':
        result = round(initNum / lbsToKg)
        break
      case 'mi':
        result = round(initNum * miToKm)
        break
      case 'km':
        result = round(initNum / miToKm)
        break
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`

    return result;
  };
  
}

module.exports = ConvertHandler;
