async function searchAndMaybeSort(API, tableId, params, field, sort) {
  const result = await API.searchTable(tableId, params);
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
