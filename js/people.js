var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/people/";

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
};
xhr.open("GET", url, true);
xhr.send();

function myFunction(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  out +=
    "<tr><th>Name</th><th>Gender</th><th>Eye Color</th><th>Hair Color</th><th>Age</th><th>Films I am in</th><th>Link to the character</th></tr>";

  for (i = 0; i < arr.length; i++) {
    out +=
      "<tr><td>" +
      arr[i].name +
      "</td><td>" +
      arr[i].gender +
      "</td><td>" +
      arr[i].eye_color +
      "</td><td>" +
      arr[i].hair_color +
      "</td><td>" +
      arr[i].age +
      "</td><td>" +
      '<a class="film-url" target="_blank" href="' +
      arr[i].url +
      '">' +
      arr[i].films +
      "</a>" +
      "</td><td>" +
      '<a class="film-url" target="_blank" href="' +
      arr[i].url +
      '">' +
      arr[i].url +
      "</a>" +
      "</td></tr>";
  }
  out += "</table>";
  document.getElementById("people").innerHTML = out;
}
