var config = {
  apiKey: config1.MY_KEY,
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

$('.btn').on('click', function () {
  event.preventDefault();

  trainName = $('#trainName').val().trim();
  destination = $('#destination').val().trim();
  firstTime = $('#firstTime').val().trim();
  frequency = $('#frequency').val().trim();

  database.ref().push ({
    trainName: trainName,
    destination: destination,
    firstTime: firstTime,
    frequency: frequency
  });

  var newTableRow = $('<tr>');
  var newTableData = $('<td>');

  newTableData.append(trainName);
  newTableData.append(destination);
  newTableData.append(firstTime);
  newTableData.append(frequency);

  newTableData.append(newTableRow);

  newTableRow.append('.table-body');

})