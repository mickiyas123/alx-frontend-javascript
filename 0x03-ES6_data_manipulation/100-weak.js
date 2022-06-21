export const weakMap = new WeakMap();
let i = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, i);
  i += 1;
  const query = weakMap.get(endpoint);
  if (query >= 5) {
    throw new Error('Endpoint load is high');
  }
}
