const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite('Input Assertions', function () {
    test('should correctly read a whole number input', function () {
      const getNum = convertHandler.getNum('2L')
      assert.equal(getNum % 1, 0, "2 is a integer")
      assert.equal(getNum, 2, "should be equal to 2")
    });

    test('should correctly read a decimal number input', function () {
      const getNum = convertHandler.getNum('2.5km')
      assert.isNumber(getNum, "2.5 is a decimal")
      assert.equal(getNum, 2.5, "should be equal to 2.5")
    });

    test('should correctly read a fractional input', function () {
      const getNum = convertHandler.getNum('1/5L')
      assert.isNumber(getNum, "1/5 is a number")
      assert.equal(getNum, 0.2, "1/5 is 0.2 decimal")
    });

    test('should correctly read a fractional input with a decimal', function () {
      const getNum = convertHandler.getNum('1/2.5km')
      assert.isNumber(getNum, "1/2.5 is a number")
      assert.equal(getNum, 0.4, "1/2.5 is 0.4 decimal")
    });

    test('should correctly read a fractional input with a decimal', function () {
      const getNum = convertHandler.getNum('3/2/3l')
      assert.equal(getNum, 'ERROR', "3/2/3 is a Error")
    });

    test('should correctly default to a numerical input of 1 when no numerical input is provided', function () {
      const getNum = convertHandler.getNum('l')
      assert.equal(getNum, 1, "'l' is not a number")
    });

  })

  suite('Unit Assertions', function () {
    
    test('should correctly read each valid input unit', function () {
      const getUnitgal = convertHandler.getUnit('2gal')
      const getUnitl = convertHandler.getUnit('2L')
      const getUnitlbs = convertHandler.getUnit('2lbs')
      const getUnitkg = convertHandler.getUnit('2kg')
      const getUnitmi = convertHandler.getUnit('2mi')
      const getUnitkm = convertHandler.getUnit('2km')
      
      assert.equal(getUnitgal, 'gal', "'2gal' should be equal to 'gal'")
      assert.equal(getUnitl, 'L', "'2L' should be equal to 'L'")
      assert.equal(getUnitlbs, 'lbs', "'2lbs' should be equal to 'lbs'")
      assert.equal(getUnitkg, 'kg', "'2kg' should be equal to 'kg'")
      assert.equal(getUnitmi, 'mi', "'2mi' should be equal to 'mi'")
      assert.equal(getUnitkm, 'km', "'2km' should be equal to 'km'")

    });

    test('should correctly return an error for an invalid input unit', function () {
      const getUnitErrorF = convertHandler.getUnit('3F')
      const getUnitErrorKmkg = convertHandler.getUnit('3kmkg')
      
      assert.equal(getUnitErrorF, 'ERROR', "3F is an invalid input unit")
      assert.equal(getUnitErrorKmkg, 'ERROR', "3kmkg is an invalid input unit")
    });

  })

  suite('Return Unit Assertions', function () {

    test('should return the correct return unit for each valid input unit', function () {
      const getRetUnitgal = convertHandler.getReturnUnit('gal')
      const getRetUnitl = convertHandler.getReturnUnit('L')
      const getRetUnitlbs = convertHandler.getReturnUnit('lbs')
      const getRetUnitkg = convertHandler.getReturnUnit('kg')
      const getRetUnitmi = convertHandler.getReturnUnit('mi')
      const getRetUnitkm = convertHandler.getReturnUnit('km')
      
      assert.equal(getRetUnitgal, 'L', "'gal' should be equal to 'L'")
      assert.equal(getRetUnitl, 'gal', "'L' should be equal to 'gal'")
      assert.equal(getRetUnitlbs, 'kg', "'lbs' should be equal to 'kg'")
      assert.equal(getRetUnitkg, 'lbs', "'kg' should be equal to 'lbs'")
      assert.equal(getRetUnitmi, 'km', "'mi' should be equal to 'km'")
      assert.equal(getRetUnitkm, 'mi', "'km' should be equal to 'mi'")
    });

  })

  suite('SpellOut Unit Assertions', function () {

    test('should correctly return the spelled-out string unit for each valid input unit', function () {
      const getSpellUnitgal = convertHandler.spellOutUnit('gal')
      const getSpellUnitl = convertHandler.spellOutUnit('L')
      const getSpellUnitlbs = convertHandler.spellOutUnit('lbs')
      const getSpellUnitkg = convertHandler.spellOutUnit('kg')
      const getSpellUnitmi = convertHandler.spellOutUnit('mi')
      const getSpellUnitkm = convertHandler.spellOutUnit('km')
      
      assert.equal(getSpellUnitgal, 'gallons', "'gal' should be equal to 'gallons'")
      assert.equal(getSpellUnitl, 'liters', "'L' should be equal to 'liters'")
      assert.equal(getSpellUnitlbs, 'pounds', "'lbs' should be equal to 'pounds'")
      assert.equal(getSpellUnitkg, 'kilograms', "'kg' should be equal to 'kilograms'")
      assert.equal(getSpellUnitmi, 'miles', "'mi' should be equal to 'miles'")
      assert.equal(getSpellUnitkm, 'kilometers', "'km' should be equal to 'kilometers'")
    });

  })

  suite('Convert Unit Assertions', function() {

    test('should correctly convert gal to L', function () {
      const convertGalToL = convertHandler.convert(3, 'gal')
      
      assert.equal(convertGalToL, 11.35623, "(3, 'gal') should be equal to 11.35623")
    })

    test('should correctly convert L to gal', function () {
      const convertLToGal = convertHandler.convert(3, 'L')

      assert.equal(convertLToGal, 0.79252, "(3, 'L') should be equal to 0.79252")
    })

    test('should correctly convert lbs to kg', function () {
      const convertLbsToKg = convertHandler.convert(3, 'lbs')

      assert.equal(convertLbsToKg, 1.36078, "(3, 'lbs') should be equal to 1.36078")
    })

    test('should correctly convert kg to lbs', function () {
      const convertKgToLbs = convertHandler.convert(3, 'kg')

      assert.equal(convertKgToLbs, 6.61387, "(3, 'kg') should be equal to 6.61387")
    })

    test('should correctly convert Mi to Km', function () {
      const convertMiToKm = convertHandler.convert(3, 'mi')

      assert.equal(convertMiToKm, 4.82802, "(3, 'mi') should be equal to 4.82802")
    })

    test('should correctly convert Km to Mi', function () {
      const convertKmToMi = convertHandler.convert(3, 'km')

      assert.equal(convertKmToMi, 1.86412, "(3, 'km') should be equal to 1.86412")
    })

  })
});