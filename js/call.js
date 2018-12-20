
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var timestamp = hours*3600 + minutes*60 + seconds;
$('#room_id').val(timestamp);
$('#link_slide').val('https://topkid.topica.vn/trial/slides/demo.pdf');

var token = "Ngociscoming";

function login_vcrx(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://vcrxapitester.topica.vn/api/user/login",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "cc5e946f-5331-4402-bfe2-a5565d2c7b70"
    },
    "processData": false,
    "data": "{\"username\":\"ADMIN\",\"password\":\"123456\"}"
  }

  $.ajax(settings).done(function (response) {
    return response.result.accessToken;
  });
}


function get_link(role='STUDENT') {
  // var token = login_vcrx();
  var vcrx = "https://vcrx.wowkid.edu.vn/";

  var room_id = document.getElementById('room_id').value;
  var link_slide = document.getElementById('link_slide').value;
  // Input to keep the place holder

  if (room_id.length >0){

    // Render link
    var obj = {
        "token": login_vcrx,
        "topic": "Lesson 2",
        "timeStart": "1543460400",
        "userId": 2,
        "userName": "",
        "userRole": role,
        "meetingId": room_id,
        "email": "sontm2@topica.edu.vn",
        "video_warmup": "",
        "link_slide": link_slide,
        "idVcrx": "0",
        "idRoomVcrx":"",
        "moodleToken": ""
    };

    var str = btoa(jQuery.param(obj));
    var url = vcrx +room_id+"?token=" +str;

    return url;
  }
  else{
    return '';
  }

}


function render(){
  var student_link = get_link('STUDENT');
  var teacher_link = get_link('teacher');
  var po_link = get_link('PO');


  $('#student_input').val(student_link);
  $('#teacher_input').val(teacher_link);
  $('#assist_input').val(po_link);

}

function copy_link(input_id){
  var my_link = document.getElementById(input_id);
  my_link.select();
  document.execCommand("copy");
  $('.message').text("Đã copy link");

}











//
