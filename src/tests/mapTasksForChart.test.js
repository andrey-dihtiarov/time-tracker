const {  mapTasksForChart } = require('../utils/chartsHelper');
const { MOCKED_TASKS, MOCKED_CHART_DATA } = require('../constants/tests');

describe("mapTasksForChart test", () => {
  it('should match MOCKED_CHART_DATA', function() {
    expect(mapTasksForChart(MOCKED_TASKS)).toEqual(MOCKED_CHART_DATA)
  })
});
