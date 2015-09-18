#! /usr/bin/env node
var fs = require('fs');

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
        console.log(nextBranch(json));
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

function nextBranch(config) {
  config.schedule.sort(function(a,b) {
    if (!a.dateObj) {
      a.stamp = Date.parse(a.date);
    }
    if (!b.dateObj) {
      b.stamp = Date.parse(b.date);
    }
    return a.stamp - b.stamp;
  });
  var now = (new Date()).getTime();
  for(var i=0; i<config.schedule.length; i++) {
    if (config.schedule[i].stamp > now) {
      return config.schedule[i].branch;
    }
  }
  return 'master';
}