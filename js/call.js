var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var timestamp = hours*3600 + minutes*60 + seconds;
$('#room_id').val(timestamp);


function get_link() {
  var vcrx = "https://vcrxtopkidtrial.topica.vn/"


  
  var room_id = document.getElementById('room_id').value;
  var link_slide = document.getElementById('link_slide').value;
  // Input to keep the place holder
  var my_link = document.getElementById('my_link');


  if (room_id.length >0 && link_slide.length>0){

    // Render link
    var obj = {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTQ1MTA5NjEwLCJleHAiOjE1NDU1MDk2MTB9.4tNOf2av0ttTRnsZ1NEyhtZvTD-eO8ybuox6njRY-CgPRhTKt4qmMjOon52IL7ov3xv141_zcHBHc8yO6GOW3Q",
        "topic": "Lesson 2",
        "timeStart": "1543460400",
        "userId": 2,
        "userName": " Giao Vien",
        "userRole": "STUDENT",
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



    // COPY the link to clipboard
    $('#my_link').val(url);
    my_link.select();
    document.execCommand("copy");


    // Alert
    $('.message').text("Đã copy link");
  }
}
