const fs = require("fs");

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  /*if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    */
  const commands = data.split("/\r?\n/").map((command) => command.split(" "));
  console.log(commands);
});

let drivers = [];

function addDriver(driverId, xCoordinate, yCoordinate) {
  const newDriver = {
    id: driverId,
    location: {
      x: xCoordinate,
      y: yCoordinate,
    },
  };

  drivers.push(newDriver);
}

module.exports = {
  addDriver,
  drivers,
};
