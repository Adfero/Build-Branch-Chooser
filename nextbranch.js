exports.nextBranch = function(config,now) {
  config.schedule.sort(function(a,b) {
    if (!a.dateObj) {
      a.stamp = Date.parse(a.date);
    }
    if (!b.dateObj) {
      b.stamp = Date.parse(b.date);
    }
    return a.stamp - b.stamp;
  });
  for(var i=0; i<config.schedule.length; i++) {
    if (config.schedule[i].stamp > now.getTime()) {
      var index = Math.min(config.schedule.length - 1, i + config.server_number);
      return config.schedule[index].branch;
    }
  }
  return 'master';
}