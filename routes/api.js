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
    const initSpellOutUnit = convertHandler.spellOutUnit(initUnit)

    const returnNum = convertHandler.convert(initNum, initUnit)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnSpellOutUnit = convertHandler.spellOutUnit(returnUnit)

    const string = convertHandler.getString(initNum, initSpellOutUnit, returnNum, returnSpellOutUnit)
    console.log(string)
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
