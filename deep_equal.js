// Deep Comparison

// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

// This function deepEqual was assigned as an exercise in Eloquent Ruby.  It two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(object1, object2) {
  if ((typeof object1) != "object" || (typeof object2) != "object") {
    if ((typeof object1) == (typeof object2) && (object1 !== object2)) {
      return false;
    } 
    else if ((typeof object1) != (typeof object2)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (typeof object1 == "object" && typeof object2 == "object" && object1 != null) {
    var propertyCount1 = 0,
        propertyCount2 = 0;
    for (var property in object1) {
      propertyCount1++;
    };
    for (var property in object2) {
      propertyCount2++;
    };
    if (propertyCount1 != propertyCount2) {
      return false;
    }
    for (var property in object1) {
      if (!(property in object2)) {
        return false;
      }
      else {
        return deepEqual(object1[property], object2[property]);
      }
    }
  }
  else {
    return false;
  }
}



