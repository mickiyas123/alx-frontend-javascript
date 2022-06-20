export default function updateUniqueItems(map) {
  if (typeof map !== 'object') {
    return 'Cannot process';
  }

  for (const [key, val] of map) {
    if (val === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
