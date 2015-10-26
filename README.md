
Easy and simple gauge for angular - angular-gauge
=================
   
Angular directive to be able to use the justGage gauge component in angular application.  
Check the demo.html to se an some exemples of use.

http://justgage.com
https://github.com/toorshia/justgage

How to use
-----
bower install angular-justgage

 1) Reference the JS needed and module

     <script src="./bower_components/raphael/raphael.js"></script>
    <script src="./bower_components/justgage-bower/justgage.js"></script>
    <script src="./angular-justgage.js"></script>

2) Use the directive in your page

     <just-gage value="'13'"></just-gage>

3) Enjoy

Options
----
  * idGauge : Specific id for the graph, if not set, the chart has a random unique id in the page
  * value
  * minValue
  * maxValue
  * title
  * label
  * hideMinMax : true/false
  * backgroundColor: ex: "#FF0000"
  * levelsColor: ex: 3 levels = ["#FF0000","#00FF00","#0000FF"]
  * gradientLevelsColor: true/false
  * symbol: ex: "$"
  * minValueFontSize: default "16"
  * minTitlefontSize: default "10"
  * minLabelFontSize: default "10"
  * minMinMaxFontSize: default "10"
  * options: options object, if the options object is set, the singles parameters are not used, the options are those used in the justgage component : https://github.com/toorshia/justgage
