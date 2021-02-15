var tar = require("tar");
const fs = require("fs");

fs.createReadStream("./node_modules.tgz").pipe(
  tar.x({ cwd: "/tmp/destination-node-tar" })
);
