const { searchAndMaybeSort } = require('../src/searchHelper.js');

const createAPI = (rows) => ({
  searchTable: jest.fn().mockResolvedValue({ rows })
});

describe('searchAndMaybeSort', () => {
  test('sorts results by field when sort is true', async () => {
    const rows = [
      { optionsTypeState: 'b', id: 1 },
      { optionsTypeState: 'a', id: 2 }
    ];
    const API = createAPI(rows);
    const result = await searchAndMaybeSort(API, 'table1', {}, 'optionsTypeState', true);
    expect(API.searchTable).toHaveBeenCalled();
    expect(result.map(r => r.optionsTypeState)).toEqual(['a', 'b']);
  });
});
