// ColorTests.js

const { convertPairNumberToColorPair, convertColorPairToPairNumber } = require('./colorPairFunctions');
const { generatePrintableColorManual } = require('./colorPairManualGeneration');
const ColorPair = require('./colorPair');

function runColorPairTests() {
  let pairNumber = 4;
  let testPair1 = convertPairNumberToColorPair(pairNumber);
  console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
  console.assert(testPair1.majorColor === "WHITE", 'Test failed');
  console.assert(testPair1.minorColor === "BROWN", 'Test failed');

  pairNumber = 5;
  testPair1 = convertPairNumberToColorPair(pairNumber);
  console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
  console.assert(testPair1.majorColor === "WHITE", 'Test failed');
  console.assert(testPair1.minorColor === "SLATE", 'Test failed');

  pairNumber = 23;
  testPair1 = convertPairNumberToColorPair(pairNumber);
  console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
  console.assert(testPair1.majorColor === "RED", 'Test failed');
  console.assert(testPair1.minorColor === "GREEN", 'Test failed');

  let testPair2 = new ColorPair("YELLOW", "GREEN");
  pairNumber = convertColorPairToPairNumber(testPair2);
  console.log(`[In] Colors: ${testPair2}, [Out] Pair Number: ${pairNumber}`);
  console.assert(pairNumber === 18, 'Test failed');

  testPair2 = new ColorPair("RED", "BLUE");
  pairNumber = convertColorPairToPairNumber(testPair2);
  console.log(`[In] Colors: ${testPair2}, [Out] Pair Number: ${pairNumber}`);
  console.assert(pairNumber === 6, 'Test failed');

  console.log(generatePrintableColorManual());
}

runColorPairTests();
