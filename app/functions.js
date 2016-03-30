exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    for(i = 2; i <= num; i++) {
      if (num%i === 0) {
        return false;
      } else {
        return true;
      }
    }
  },

  arraySum : function(array) {
    return array.reduce(function(a, b) {
      return a + b;
    });
  },

  fizzBuzz : function(num) {
    if (num%3 === 0 && num%5 === 0) {
      return "fizzbuzz";
    } else if (num%3 === 0) {
      return "fizz";
    } else if (num%5 === 0) {
      return "buzz";
    } else if (typeof num !== typeof 1) {
      return false;
    } else {
      return num;
    }
  }
};
