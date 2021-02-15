var tar = require("tar-fs");
var fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("./node_modules.tgz")
  .pipe(zlib.createGunzip())
  .pipe(tar.extract("/tmp/destination"));
