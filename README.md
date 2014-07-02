[![Build Status](https://travis-ci.org/sumitchawla/timezone-names.svg?branch=master)](https://travis-ci.org/sumitchawla/timezone-names)

# timezone-names
A simple library to get timezone offsets. Functions accept timezone names.  Abbreviations are not supported because same abbreviation is used for multiple timezones.

## Functions
 
### getTimezoneByName
Get timezone info object.

``` js
 
 var tz = require("timezone-names");
 
 tz.getTimezoneByName('Pacific Standard Time');  
 // Returns   
 { 
   Abbreviation: 'PST',  //Abbreviation for the timezone
   Name: 'Pacific Standard Time',  //Standard Name
   DisplayName: 'Pacific Standard Time(UTC - 8)',  //Display String 
   Offset: '-8 hours' //Offset string
}


```
### getTimezoneOffsetByName
Get timezone offset.

``` js
 
 tz.getTimezoneOffsetByName('Pacific Standard Time');  
 // Returns   
 { 
  Offset: '-8 hours', //Offset String
  Hours: -8, //Hours component
  Minutes: 0, //Minutes Component
  TotalMinutesOffset: -480  //Total Offset in Minutes
 }


```

### getAll
Get all timezones objects.

``` js
 
 tz.getAll();  
 // Returns  Array of timezone objects 
 [
 { 
   Abbreviation: 'PST',  //Abbreviation for the timezone
   Name: 'Pacific Standard Time',  //Standard Name
   DisplayName: 'Pacific Standard Time(UTC - 8)',  //Display String 
   Offset: '-8 hours' //Offset string
 },
 .
 .
 ]


```
