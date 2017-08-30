// Initialize Firebase
var config = {
  apiKey: "AIzaSyADltq19kqu90esSqHf-rFIMb0FCuxYvTI",
  authDomain: "nhbooking-e3197.firebaseapp.com",
  databaseURL: "https://nhbooking-e3197.firebaseio.com",
  projectId: "nhbooking-e3197",
  storageBucket: "nhbooking-e3197.appspot.com",
  messagingSenderId: "578147190015"
};

firebase.initializeApp(config);
var database = firebase.database();

function initData() {

  currentDate = new Date();
  // firebase.database().ref('testData/').set({
  //   datetime: d.getTime(),
  //   day: d.getDate(),
  //   month: d.getMonth() + 1,
  //   startTime: 0100,
  //   duration: 3,
  //   room: 'ThomasEdison',
  //   name: 'TestUser',
  // });
  currentDay = currentDate.getDay();
  lastDay = (currentDay + 7 ) % 7;
  iterDate = new Date(currentDate.getTime());

  for (i = 0; i < currentDay; i++) {
    colId = '1_'+ i;
    $('#'+colId).addClass('red');
  }

  for (i = lastDay; i < 7; i++) {
    colId = '2_'+ i;
    $('#'+colId).addClass('red');
  }

  for (i=currentDay; i < 7; i++) {
    colId = '1_'+ i;
    fillTable(iterDate, colId);
    iterDate.setDate(iterDate.getDate() + 1);
  }

  for (i=0; i < lastDay; i++) {
    colId = '2_'+ i;
    fillTable(iterDate, colId);
    iterDate.setDate(iterDate.getDate() + 1);
  }
}

function fillTable(date, colId) {

  dateString = date.getDate() + '/' + (date.getMonth() + 1);
  htmlString = '<div class="pointer" onClick="fillData();">'+dateString+'</div>'
  $('#'+colId).html(htmlString) ;
}

function fillData() {

  alert('helloworld');
}
