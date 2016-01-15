$(document).ready(function() {
  // make an array of answers for the questions
  // insert the answers into the questions on the website
  // on form submit, read the answers and tally the points

  // ids of destinations
  var destinations = [
    ["alaska", 0],
    ["london", 0],
    ["bahamas",0]
  ];
  var terrain = [
    "terrain", // name of html input to be put into
    ['Cold', destinations[0][0]],
    ['City', destinations[1][0]],
    ['Tropical', destinations[2][0]]
  ];
  var adventure = [
    "adventure",
    ['Relaxing', destinations[2][0]],
    ['Feeling adventurous', destinations[1][0]],
    ['Hardcore', destinations[0][0]]
  ];
  var partysize = [
    "partysize",
    ['Alone', destinations[0][0]],
    ['Married, no kids', destinations[2][0]],
    ['With kids', destinations[1][0]]
  ];
  var budget = [
    "budget",
    ['Budget', destinations[2][0]],
    ['Got money for souveneirs', destinations[1][0]],
    ['Can afford Racecar', destinations[0][0]]
  ];
  var time = [
    "time",
    ['1 Week', destinations[2][0]],
    ['2 Weeks', destinations[1][0]],
    ['3-8 Weeks', destinations[0][0]]
  ];

  // mock up html for questionaire
  var optionBegin   = '<input type="checkbox" value="';
  var optionMiddle  = '"id="'
  var optionMiddle2 = '"><label for="'
  var optionMiddle3 = '">';
  var optionEnd     = '</label>';

  // combine answer arrays into one for easy looping
  var questionaire = [terrain, adventure, partysize, budget, time];

  // ids for labels and checkboxes
  var ids = 0;
  // loop to put answers into questionaire
  questionaire.forEach(function(question){
    var name = question.shift();
    question.forEach(function(answer) {
      var option = optionBegin + answer[1] + optionMiddle + ids + optionMiddle2 + ids + optionMiddle3 + answer[0] + optionEnd;
      ids++;
      $("#"+name).append(option);
    });
  });

  var questionaireSelector = "#questionaire";
  // form sumbmit
  $(questionaireSelector).submit(function(event){

    // tally points
    $("option:checked").each(function() {
      var answer = $(this).val();
      if( answer === destinations[0][0]) {
        destinations[0][1]++;
      } else if( answer === destinations[1][0] ) {
        destinations[1][1]++;
      } else if( answer === destinations[2][0] ) {
        destinations[2][1]++;
      }
    });

    // questionaire has been answered, hide it
    $(questionaireSelector).hide();

    // find out which destinations won
    if( destinations[0][1] >= destinations[1][1] && destinations[0][1] >= destinations[2][1] ) {
      $("#"+destinations[0][0]).show();
    }
    if( destinations[1][1] >= destinations[0][1] && destinations[1][1] >= destinations[2][1] ) {
      $('#'+destinations[1][0]).show();
    }
    if( destinations[2][1] >= destinations[0][1] && destinations[2][1] >= destinations[1][1] ) {
      $('#'+destinations[2][0]).show();
    }
    destinations.forEach(function(destination){
      destination[1]=0;
    });
    event.preventDefault();
  });
});
