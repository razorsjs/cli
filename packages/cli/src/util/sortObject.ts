export function sortObject(obj: object, keyOrder?: any[], dontSortByUnicode?: boolean): object {
  if (!obj) return {};
  const res = {};

  if (keyOrder) {
    keyOrder.forEach(key => {
      res[key] = obj[key];
      delete obj[key];
    });
  }

  const keys = Object.keys(obj);

  !dontSortByUnicode && keys.sort();
  keys.forEach(key => {
    res[key] = obj[key];
  });

  return res;
}
