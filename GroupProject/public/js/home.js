
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: null,
            success: function(data){
                if (data.error)
                {
                  alert("bad");
                }
                else {
                  $("#aList").append("<li>" + data + "</li>");
                }
              } ,     
            dataType: "json"
          });   
  return false;
}

function submitButton(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {
                    name:$("#planet").val()
                  },
            success: function(data){
                if (data.error)
                  alert("bad");
              } ,     
            dataType: "json"
          });   
  return false;
}


function getImage2(){
  console.log("IMAGE")
  $.get("/request", {index:2},success);
  return false;
}
          
function getImageRandom(){
  //console.log("RANDOM")
  $("#aList").empty();
  $.get("/request", {index:-1},success);
  
  return false;
}   


function success(data) {
  var num = 0;
  num++;
  if (num < 7) {
    console.log("SUCCESS");
    display.src = "public/images/" + data.name;
  }
  else if (num >= 7) {
    console.log("Win");
    alert("You got " + data.points + " out of 10 correct!");
  }
  
}

/*
function WinSuccess(data) {
  console.log("Win");
  alert("You got " + data + " out of 10 correct!");
}
*/


$(document).ready(function(){
  console.log('Ready');
  $("#readButton").click(readClicked);

});

function uploadSuccess(data) {
  display.src = "images/" + data.name;

}


