$(document).ready(function() {
  // make an array of answers for the questions
  // insert the answers into the questions on the website
  // on form submit, read the answers and tally the points

  // ids of destinations
  var destinations = [
    ["antartica", 0],
    ["london", 0],
    ["bahamas",0]
  ];
  var terrain = [
    "terrain", // name of html input to be put into
    ['Desolate', destinations[0][0]],
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
    ['Got money to blow', destinations[1][0]],
    ['Can afford the most rigorous suvival gear', destinations[0][0]]
  ];
  var time = [
    "time",
    ['1 Week', destinations[2][0]],
    ['2 Weeks', destinations[1][0]],
    ['3-8 Weeks', destinations[0][0]]
  ];

  // mock up html for questionaire
  var optionBegin = '<option value="';
  var optionMiddle= '">';
  var optionEnd = '</option>';

  // combine answer arrays into one for easy looping
  var questionaire = [terrain, adventure, partysize, budget, time];

  // loop to put answers into questionaire
  questionaire.forEach(function(question){
    var name = question.shift();
    question.forEach(function(answer) {
      var option = optionBegin + answer[1] + optionMiddle + answer[0] + optionEnd;
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

    // find out which destinations won
    if( destinations[0][1] >= destinations[1][1] && destinations[0][1] >= destinations[2][1] ) {
      $("#"+destinations[0][0]).show().text(destinations[0][0] + " " + destinations[0][1]);
    }
    if( destinations[1][1] >= destinations[0][1] && destinations[1][1] >= destinations[2][1] ) {
      $('#'+destinations[1][0]).show().text(destinations[1][0] + " " + destinations[1][1]);
    }
    if( destinations[2][1] >= destinations[0][1] && destinations[2][1] >= destinations[1][1] ) {
      $('#'+destinations[2][0]).show().text(destinations[2][0] + " " + destinations[2][1]);
    }
    destinations.forEach(function(destination){
      destination[1]=0;
    });
    event.preventDefault();
  });
});
