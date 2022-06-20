export default function hasValuesFromArray(inputSet, inputArray) {
  return inputArray.every((value) => inputSet.has(value));
}
