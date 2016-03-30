exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var patt = RegExp(/\d/);
    return patt.test(str);
  },

  containsRepeatingLetter : function(str) {
    var patt = RegExp(/([a-zA-Z])\1+/);
    return patt.test(str);
  },

  endsWithVowel : function(str) {
    var last = str.length - 1
    var patt = RegExp(/([aeiouAEIOU])/);
    return patt.test(str[last])
  },

  captureThreeNumbers : function(str) {
    var patt = RegExp(/\d{3}/);
    var tony = patt.exec(str);
    if (tony === null) {
      return false;
    } else {
      return tony[0];
    }
  },

  matchesPattern : function(str) {
    if (str.length < 13 && str.match(/\d{3}-\d{3}-\d{4}/)) {
      return true;
    } else {
      return false;
    }
  },

  isUSD : function(str) {
    var patt = /^\$(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/
    return patt.test(str);
  }
};
