"use strict";

require('../index.js');

var assert = require('chai').assert;

describe('basic', function(){

    it('should throw when calling isNaN', function(){
        assert.throws(function(){
            return isNaN(NaN);
        });
    });

});