exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(i = arr.length; i > 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

// also use .pop
  truncate : function(arr) {
    var target = arr.length - 1;
    arr.splice(target, 1);
    return arr;
  },

// also use .unshift
  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

// also use .shift
  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

// also use return arr1.concat(arr2)
  concat : function(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var doubles = [];
    var cleaned = [];
    var sorted = arr.sort();
    for(i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        doubles.push(sorted[i]);
      }
    }

    for(i = 0; i < doubles.length; i++) {
      if (doubles[i] !== doubles[i + 1]) {
        cleaned.push(doubles[i]);
      }
    }

    return cleaned;
  },

  square : function(arr) {
    var squares = [];
    for(i = 0; i < arr.length; i++) {
      var square = Math.pow(arr[i], 2);
      squares.push(square);
    }
    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var locs = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        locs.push(i);
      }
    }
    return locs;
  }
};
