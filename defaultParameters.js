// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

/*let def = (a , b=2) =>{
    return a*b;
}

console.log(def(5));*/

/*function test(num = 1) {
    console.log(typeof num);
  }
  
  test(); // 'number' (num is set to 1)
  test(undefined); // 'number' (num is set to 1 too)
  
  // test with other falsy values:
  test(""); // 'string' (num is set to '')
  test(null); // 'object' (num is set to null)*/

  function preFilledArray([x = 1, y = 2] = []) {
    return x + y;
  }
  
  preFilledArray(); // 3
  preFilledArray([]); // 3
  preFilledArray([2]); // 4
  preFilledArray([2, 3]); // 5