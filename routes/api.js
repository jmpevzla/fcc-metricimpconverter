'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const express = require('express')

/**
 * @param {express.Express} app 
 */
module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', function(req, res) {
    const input = req.query.input || ''
    
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)

    if (initNum === 'ERROR' && initUnit === 'ERROR') {
      return res.status(400).send('invalid number and unit')
    }
    
    if (initNum === 'ERROR') {
      return res.status(400).send('invalid number')
    }

    if (initUnit === 'ERROR') {
      return res.status(400).send('invalid unit')
    }
    
    const initSpellOutUnit = convertHandler.spellOutUnit(initUnit)

    const returnNum = convertHandler.convert(initNum, initUnit)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnSpellOutUnit = convertHandler.spellOutUnit(returnUnit)

    const string = convertHandler.getString(initNum, initSpellOutUnit, returnNum, returnSpellOutUnit)
    
    const obj = {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string
    }

    res.json(obj)
  })
};
