var tz = require("./index.js");
var assert = require("assert");
var json = require("./timezones.json");

describe("Tests", function() {
    it('Test Pacific Standard Time', function(done){
      var timezone = tz.getTimezoneByName('Pacific Standard Time');
      console.log(timezone);
      assert(timezone);
      assert.equal(timezone.Name, 'Pacific Standard Time');
      assert.equal(timezone.Abbreviation, 'PST');
      assert.equal(timezone.Offset, '-8 hours');
      
      var offset = tz.getTimezoneOffsetByName('Pacific Standard Time');
      console.log(offset);
      assert(offset);
      assert.equal(offset.Hours, -8);
      assert.equal(offset.Minutes,0);
      assert.equal(offset.TotalMinutesOffset,-480);
      
      done();
    })

    
    it('Test Australian Central Standard Time', function(done){
      var timezone = tz.getTimezoneByName('Australian Central Standard Time');
      assert(timezone);
      assert.equal(timezone.Name, 'Australian Central Standard Time');
      assert.equal(timezone.Abbreviation, 'ACST');
      assert.equal(timezone.Offset, '9:30 hours');
      
      var offset = tz.getTimezoneOffsetByName('Australian Central Standard Time');
      assert(offset);
      assert.equal(offset.Hours, 9);
      assert.equal(offset.Minutes,30);
      assert.equal(offset.TotalMinutesOffset,570);
      
      done();
    })

    
    it('Test Venezuelan Standard Time', function(done){
      var timezone = tz.getTimezoneByName('Venezuelan Standard Time');
      assert(timezone);
      assert.equal(timezone.Name, 'Venezuelan Standard Time');
      assert.equal(timezone.Abbreviation, 'VET');
      assert.equal(timezone.Offset, '-4:30 hours');
      
      var offset = tz.getTimezoneOffsetByName('Venezuelan Standard Time');
      assert(offset);
      assert.equal(offset.Hours, -4);
      assert.equal(offset.Minutes,30);
      assert.equal(offset.TotalMinutesOffset,-270);
      
      done();
    })

    
    it('Test India Standard Time', function(done){
      var timezone = tz.getTimezoneByName('India Standard Time');
      assert(timezone);
      assert.equal(timezone.Name, 'India Standard Time');
      assert.equal(timezone.Abbreviation, 'IST');
      assert.equal(timezone.Offset, '5:30 hours');
      
      var offset = tz.getTimezoneOffsetByName('India Standard Time');
      assert(offset);
      assert.equal(offset.Hours, 5);
      assert.equal(offset.Minutes,30);
      assert.equal(offset.TotalMinutesOffset,330);
      
      done();
    })


     it('Data Sanity check', function(done){
      var timezones = tz.getAll();
      for (var i = 0; i < timezones.length; i++) {
      
        var t = timezones[i];
        var timezone = tz.getTimezoneByName(t.Name);
        assert(timezone);
      
        var offset = tz.getTimezoneOffsetByName(t.Name);
        assert(offset);
        console.log(timezone, offset);
      }
      
      done();
    })

    it("Json duplicate check", function(done){
      const check = {};
      for(var data of json){
        if(check[data.Name]){
          assert.fail("Json duplicates in name detected");
        }
        check[data.Name] = true;
      }
      done();
    })

});
