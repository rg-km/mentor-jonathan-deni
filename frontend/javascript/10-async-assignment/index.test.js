const { getStarshipModelByCharacterId } = require("./index");

jest.useRealTimers();

describe("Async/await: Get starships by character id", () => {
  it("Found starships should return data", async () => {
    const result = await getStarshipModelByCharacterId(4); 
    expect(result).toEqual(["Twin Ion Engine Advanced x1"]);
  });
});
