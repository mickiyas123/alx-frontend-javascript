export default function cleanSet(set, startString) {
  let concatStr = '';
  const strArray = [];

  if (startString && typeof startString === 'string') {
    for (const str of set) {
      if (str && str.startsWith(startString)) {
        strArray.push(str.slice(startString.length));
      }
    }
    concatStr = strArray.join('-');
  }
  return concatStr;
}
