// "use strict"; // apparently cannot delete __proto__ in strict mode?

delete Object.prototype.__proto__; // This does nothing as of Node 0.10 -_-#

/*
    __proto__ really is a weird beast in Node 0.10. There is no known way to get rid of it.
*/

global.isNaN = function(){
    throw new Error('Do not use isNaN. Use ES6 Number.isNaN instead (or a polyfill).\nSee https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Confusing_special-case_behavior for details')
};