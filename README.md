# es-env-remove-footguns

Removing some footguns from an ECMAScript environment.

**WARNING!** this will turn the environment you're running in non-standard. Your own code or some dependency code may break as a result.


# Install

````sh
npm install es-env-remove-footguns --save
````


# How to use it

Just `require` it before anything else. Beware, this may break dependent packages. Use at your own risk!

````sh
require('es-env-remove-footguns');
````


# Potential limitations

For now, this has only been tested and used on Node.js™ 0.10.
It should work fine on 0.12 and [io.js](https://iojs.org/) but in the unlikely case you run into problems, please file an [issue](https://github.com/DavidBruant/es-env-remove-footguns/issues)


# Changes

## (should) remove Object.prototype.__proto__

Using this one for setting hurts performance and for getting, the standard [Object.getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) does the job fine

## Replace `isNaN` with a function that throws

`isNaN` is broken, ES6 fixed it with `Number.isNaN`, let's just kill `isNaN`.



# Licence

ISC