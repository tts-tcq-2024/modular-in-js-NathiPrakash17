const MajorColorNames = [
  "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const MinorColorNames = [
  "BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function generatePrintableColorManual() {
  let manual = '';
  let pairNumber = 1;

  for (const majorColor of MajorColorNames) {
    for (const minorColor of MinorColorNames) {
      manual += `Pair Number: ${pairNumber}, Major Color: ${majorColor}, Minor Color: ${minorColor}\n`;
      pairNumber++;
    }
  }

  return manual;
}

module.exports = {
  generatePrintableColorManual
};
