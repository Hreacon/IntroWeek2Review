$(document).ready(function() {
  // make an array of answers for the questions
  // insert the answers into the questions on the website
  // on form submit, read the answers and tally the points

  // ids of destinations
  var destination1 = "antartica";
  var destination2 = "london";
  var destination3 = "bahamas"
  var terrain = [
    "terrain", // name of html input to be put into
    ['Desolate', destination1],
    ['City', destination2],
    ['Tropical', destination3]
  ];
  var adventure = [
    "adventure",
    ['Relaxing', destination3],
    ['Feeling adventurous', destination2],
    ['Hardcore', destination1]
  ];
  var partysize = [
    "partysize",
    ['Alone', destination1],
    ['Married, no kids', destination3],
    ['With kids', destination2]
  ];
  var budget = [
    "budget",
    ['Budget', destination3],
    ['Got money to blow', destination2],
    ['Can afford the most rigorous suvival gear', destination1]
  ];
  var time = [
    "time",
    ['1 Week', destination3],
    ['2 Weeks', destination2],
    ['3-8 Weeks', destination1]
  ];

  // mock up html for questionaire
  var optionBegin = '<div><input type="radio" value="';
  var optionMiddle= '" name="';
  var optionMiddle2= '">';
  var optionEnd = '</div>';

  // combine answer arrays into one for easy looping
  var questionaire = [terrain, adventure, partysize, budget, time];

  // loop to put answers into questionaire
  questionaire.forEach(function(question){
    var name = question.shift();
    question.forEach(function(answer) {
      var option = optionBegin + answer[1] + optionMiddle + name + optionMiddle2 + answer[0] + optionEnd;
      $("#"+name).append(option);
    });
  });

  // form sumbmit
  $("#questionaire").submit(function(event){
    // get the answers
    // loop through answers and give destinations points
    // find the destination with the highest points
    // show that destination, hide the questionaire
    // if two are tied, random or show both?
    var destinationPoints1 = 0;
    var destinationPoints2 = 0;
    var destinationPoints3 = 0;
    $("input:checked").each(function() {
      var answer = $(this).val();
      if( answer === destination1) {
        destinationPoints1++;
      } else if( answer === destination2 ) {
        destinationPoints2++;
      } else if( answer === destination3 ) {
        destinationPoints3++;
      }
    });

    event.preventDefault();
  });
});
