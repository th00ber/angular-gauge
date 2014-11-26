
Easy and simple gauge for angular - angular-gauge
=================
   
Angular directive to be able to use the justGage gauge component in angular application.  
Check the demo.html to se an some exemples of use.

http://justgage.com
https://github.com/toorshia/justgage

How to use
-----
bower install angular-justgage

 1) Reference the JS needed

     <script src="./bower_components/raphael/raphael.js"></script>
    <script src="./bower_components/justgage-bower/justgage.js"></script>
    <script src="./angular-justgage.js"></script>

2) Use the directive in your page

     <just-gage value="'13'"></just-gage>

3) Enjoy

Options
----
  * value
  * minValue
  * maxValue
  * title
  * label
  * showMinMax : true/false
  * backgroundColor: ex: "#FF0000"
  * levelsColor: ex: 3 levels = ["#FF0000","#00FF00","#0000FF"]
  * gradientLevelsColor: true/false
