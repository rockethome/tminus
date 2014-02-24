tminus
======

JavaScript Countdown Library

## Example

Very simple, pass the date into the constructor... watch it countdown

    $('#tzone').tminus({tminus:'2014 02 28 12:00:00'});

## Options

  - `tminus`: date string, Time to countdown to
  - `skip_zero`: true or false,Skip 0'd out segments like 0 Years, 0 Months
  - `animate`: true or false, adds a fade in and fade out. Very cheesey.

## CSS Classes

    // Clock Segment
    .tzone-entry {

    }

    // Segment number
    .tzone-int {

    }

    // Segment Labels, ie Days, months
    .tzone-labels { 

    }
