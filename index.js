#! /usr/bin/env node
var fs = require('fs');
var nextbranch = require('./nextbranch');

if (process.argv.length != 3) {
  usage();
} else {
  fs.readFile(process.argv[2],'utf8',function(err,data) {
    if (err) {
      console.error(err);
      justPrintMaster();
    } else {
      try {
        var json = JSON.parse(data);
        console.log(nextbranch.nextBranch(json,new Date()));
      } catch (e) {
        console.error(e);
        justPrintMaster();
      }
    }
  })
}

function usage() {
  console.error('Usage: nextbranch /path/to/config.json');
}

function justPrintMaster() {
  console.log('master');
}

