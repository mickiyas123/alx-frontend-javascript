export default function cleanSet(set, startString) {
  let outputString = '';
  const startStringLen = startString.length;
  if (startStringLen !== 0) {
    let count = 0;
    for (const val of set) {
      if (val.startsWith(startString)) {
        if (count === 0) {
          outputString += val.slice(startStringLen);
        } else {
          outputString = `${outputString}-`;
          outputString += val.slice(startStringLen);
        }
        count = 1;
      }
    }
  }
  return outputString;
}
