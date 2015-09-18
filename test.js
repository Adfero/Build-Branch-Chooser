var assert = require('assert');
var nextbranch = require('./nextbranch');

var config = {
  "schedule": [
   {
      "date": "2015-09-01",
      "branch": "september_release"
    },
    {
      "date": "2015-10-01",
      "branch": "october_release"
    },
    {
      "date": "2015-11-01",
      "branch": "november_release"
    },
    {
      "date": "2015-12-01",
      "branch": "december_release"
    }
  ],
  "server_number": 0
}

describe('nextbranch', function() {
  it('returns september_release in august', function(done) {
    var branch = nextbranch.nextBranch(config,new Date('2015-08-01'))
    assert.equal(branch,'september_release');
    done();
  });
  it('returns october_release in september', function(done) {
    var branch = nextbranch.nextBranch(config,new Date('2015-09-01'))
    assert.equal(branch,'october_release');
    done();
  });
  it('returns november_release in october', function(done) {
    var branch = nextbranch.nextBranch(config,new Date('2015-10-01'))
    assert.equal(branch,'november_release');
    done();
  });
  it('returns december_release in november', function(done) {
    var branch = nextbranch.nextBranch(config,new Date('2015-11-01'))
    assert.equal(branch,'december_release');
    done();
  });
});