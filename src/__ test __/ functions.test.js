const functions = require('../functions');

// tests for mathsIf function

describe('functions', () => {
  test('mathsIf add', () => {
    expect(functions.mathsIf(6, 7, 'add')).toBe(13);
  })
}),

describe('functions', () => {
  test('mathsIf mult', () => {
    expect(functions.mathsIf(7, 8, 'mult')).toBe(56);
  })
}),

describe('functions', () => {
  test('mathsIf min', () => {
    expect(functions.mathsIf(392, 99, 'min')).toBe(293)
  })
}),

describe('functions', () => {
  test('mathsIf div', () =>{
    expect(functions.mathsIf(130,2, 'div')).toBe(65)
  })
}),

// tests for mathsSwitch function


describe('functions', () => {
  test('mathsSwitch add', () => {
    expect(functions.mathsSwitch(30,189,'add')).toBe(219)
  })
}),


describe('functions', () => {
  test('mathsSwitch mult', () => {
    expect(functions.mathsSwitch(40,189,'mult')).toBe(7560)
  })
}),


describe('functions', () => {
  test('mathsSwitch min', () => {
    expect(functions.mathsSwitch(400,189,'min')).toBe(211)
  })
}),

describe('functions', () => {
  test('mathsSwitch div', () => {
    expect(functions.mathsSwitch(250,5,'div')).toBe(50)
  })
})

// tests for mathsHash  function 

describe('functions', () => {
  test('mathsHash add', () => {
    expect(functions.mathsHash(150,150,'add')).toBe(300)
  })
}),

describe('functions', () => {
  test('mathsHash mult', () => {
    expect(functions.mathsHash(140,20,'mult')).toBe(2800)
  })
}),


describe('functions', () => {
  test('mathsHash min', () => {
    expect(functions.mathsHash(400,189,'min')).toBe(211)
  })
}),

describe('functions', () => {
  test('mathsHash div', () => {
    expect(functions.mathsHash(25,25,'div')).toBe(1)
  })
})