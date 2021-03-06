# js-clock
A Simple JavaScript Clock for stream displays, with customisable formats and styles.

<p align="center">
    <img src="https://dpyv9h0pv5pev.cloudfront.net/img/clock1.png" width="200" alt="Clock Demo 1"/>
    <img src="https://dpyv9h0pv5pev.cloudfront.net/img/clock2.png" width="200" alt="Clock Demo 2"/>
    <img src="https://dpyv9h0pv5pev.cloudfront.net/img/clock3.png" width="200" alt="Clock Demo 3"/>
</p>

___

## URL Parameters

**format**

List of all available formats from [DayJS Formats](https://day.js.org/docs/en/display/format) 

Format | Output           | Description
-------|------------------|--------------------------------------
YY     | 18               | Two-digit year
YYYY   | 2018             | Four-digit year
M      | 1-12             | The month, beginning at 1
MM     | 01-12            | The month, 2-digits
MMM    | Jan-Dec          | The abbreviated month name
MMMM   | January-December | The full month name
D      | 1-31             | The day of the month
DD     | 01-31            | The day of the month, 2-digits
Do	   | 1st 2nd ... 31st | Day of Month with ordinal
d      | 0-6              | The day of the week, with Sunday as 0
dd     | Su-Sa            | The min name of the day of the week
ddd    | Sun-Sat          | The short name of the day of the week
dddd   | Sunday-Saturday  | The name of the day of the week
H      | 0-23             | The hour
HH     | 00-23            | The hour, 2-digits
h      | 1-12             | The hour, 12-hour clock
hh     | 01-12            | The hour, 12-hour clock, 2-digits
m      | 0-59             | The minute
mm     | 00-59            | The minute, 2-digits
s      | 0-59             | The second
ss     | 00-59            | The second, 2-digits
SSS    | 000-999          | The millisecond, 3-digits
Z      | +05:00           | The offset from UTC, ±HH:mm
ZZ     | +0500            | The offset from UTC, ±HHmm
A      | AM PM            | 
a      | am pm            | 


**utc**

Value | Description
------|----------------------------------
0     | Uses default local time [default]
1     | Uses UTC time
