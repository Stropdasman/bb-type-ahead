async function searchAndMaybeSort(API, sourceId, params, field, sort, isDataProvider = false) {
  const result = isDataProvider
    ? await API.executeQuery(sourceId, params)
    : await API.searchTable(sourceId, params);
  let rows = result.rows || [];
  if (sort) {
    rows = [...rows].sort((a, b) => {
      const aVal = String(a[field] ?? '').toLowerCase();
      const bVal = String(b[field] ?? '').toLowerCase();
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  }
  return rows;
}
module.exports = { searchAndMaybeSort };
