'use strict';

var timezones = require('./timezones.json');
var Map = new require('data-structures').Map;


var TimeZoneMgr = function() {
        var tzmap = new Map();
        for (var i = 0; i < timezones.length; i++) {
          var tz = timezones[i];
          tzmap.set(tz.Name.toLowerCase(), tz); 
        }

        this.getAll = function() {
          return timezones;
        }

        this.getTimezoneByName = function(name){
          return name ? tzmap.get(name.toLowerCase()) : null;
        }

        this.getTimezoneOffsetByName = function(name){
          var t = this.getTimezoneByName(name);
          if (!t) return null;
          var arr = (t.Offset + ":0").split(':'); 
          var h = parseInt(arr[0]);
          var m = parseInt(arr[1]);
          return { Offset: t.Offset, Hours : h, Minutes : m, TotalMinutesOffset : h * 60 + ((h > 0 ? 1 : -1) * m) };
        }
};





module.exports = new TimeZoneMgr(); 
