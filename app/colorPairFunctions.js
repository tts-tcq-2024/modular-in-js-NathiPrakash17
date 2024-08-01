const ColorPair = require('./colorPair');

const MajorColorNames = [
  "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const MinorColorNames = [
  "BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function convertPairNumberToColorPair(pairNumber) {
  const minorSize = MajorColorNames.length;
  const majorSize = MinorColorNames.length;
  
  if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
    throw new Error(`Argument PairNumber:${pairNumber} is outside the allowed range`);
  }
  
  const zeroBasedPairNumber = pairNumber - 1;
  const majorIndex = Math.floor(zeroBasedPairNumber / minorSize);
  const minorIndex = zeroBasedPairNumber % minorSize;

  const pair = new ColorPair();
  pair.majorColor = MajorColorNames[majorIndex];
  pair.minorColor = MinorColorNames[minorIndex];
  
  return pair;
}

function convertColorPairToPairNumber(pair) {
  const majorIndex = MajorColorNames.indexOf(pair.majorColor);
  const minorIndex = MinorColorNames.indexOf(pair.minorColor);

  if (majorIndex === -1 || minorIndex === -1) {
    throw new Error(`Unknown Colors: ${pair.toString()}`);
  }

  return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

module.exports = {
  convertPairNumberToColorPair,
  convertColorPairToPairNumber
};
