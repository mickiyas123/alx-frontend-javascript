export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let val of array) {
    val = appendString + val;
    newArray.push(val);
  }

  return newArray;
}
