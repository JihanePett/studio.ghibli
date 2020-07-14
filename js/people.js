var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/people/";

xhr.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
}
xhr.open("GET", url, true);
xhr.send();

function myFunction(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";

  for(i = 0; i < arr.length; i++) {
    out += "<tr><td>" + 
    arr[i].name +
    "</td><td>" +
    arr[i].gender +
    "</td><td>" +
    arr[i].age +
    "</td><td>" +
    '<a class="film-url" target="_blank" href="' + arr[i].url + '">' + arr[i].url + '</a><br>' +
    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("people").innerHTML = out;
  var header = table.createTHead();
}