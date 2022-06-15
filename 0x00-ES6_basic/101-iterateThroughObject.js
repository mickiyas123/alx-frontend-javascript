export default function iterateThroughObject(reportWithIterator) {
  let anotherOne = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    if (i === reportWithIterator.length - 1) {
      anotherOne += reportWithIterator[i];
    } else {
      anotherOne += `${reportWithIterator[i]} | `;
    }
  }

  return anotherOne;
}
