const assert = require("assert");
const { addDriver, drivers } = require("./geektrust");

describe("ADD_DRIVER", () => {
  beforeEach(() => {
    drivers.length = 0;
  });

  it("should add a new driver", () => {
    addDriver("D001", 10, 20);
    assert.deepStrictEqual(drivers, [
      { id: "D001", location: { x: 10, y: 20 } },
    ]);
  });
});
