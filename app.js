$(document).ready(function(){
var config = {
  apiKey: 'AIzaSyBnOO8N3mNfIIMyYiojSq83PfPeGQ6nFpo',
  authDomain: "britt-project.firebaseapp.com",
  databaseURL: "https://britt-project.firebaseio.com",
  projectId: "britt-project",
  storageBucket: "britt-project.appspot.com",
  messagingSenderId: "143368044597"
};
firebase.initializeApp(config);

var database = firebase.database();

var trainName;
var destination;
var firstTime;
var frequency;
var nextArrival;
var minutesAway;

$('button').on('click', function () {
  event.preventDefault();

  $('.table-body').append('<tr>');

  trainName = $('#trainName').val().trim();
  destination = $('#destination').val().trim();
  firstTime = $('#firstTime').val().trim();
  frequency = $('#frequency').val().trim();
  // nextArrival = moment().add(frequency, 'm');

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTime: firstTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  var newTableRow = $('<tr>');
  var newTableData = $('<td>');

  newTableData.append(trainName);
  newTableData.append(destination);
  newTableData.append(firstTime);
  newTableData.append(frequency);
  newTableData.append(nextArrival);

  newTableData.append(newTableRow);

  newTableRow.append('.table-body');
});

  // var newTableRow = $('<tr>');
  // var newTableData = $('<td>');

  // newTableData.append(trainName);
  // newTableData.append(destination);
  // newTableData.append(firstTime);
  // newTableData.append(frequency);
  // newTableData.append(nextArrival);

  // newTableData.append(newTableRow);

  // newTableRow.append('.table-body');

})