var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/vehicles/";

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
  out += "<tr><th>Name</th><th>Description</th><th>Type</th><th>length</th><th>Pilot</th><th>Films I am in</th><th>Link to the vehicle</th></tr>";

  for (i = 0; i < arr.length; i++) {
    out +=
      "<tr><td>" +
      arr[i].name +
      "</td><td>" +
      arr[i].description +
      "</td><td>" +
      arr[i].vehicle_class +
      "</td><td>" +
      arr[i].length +
      "</td><td>" +
      arr[i].pilot +
      "</td><td>"+
      '<a class="film-url" target="_blank" href="' + arr[i].url + '">' + arr[i].films + "</a>" + "</td><td>" +    
      '<a class="film-url" target="_blank" href="' + arr[i].url + '">' + arr[i].url + "</a>" + "</td></tr>";
  }
  out += "</table>";
  document.getElementById("vehicles").innerHTML = out;
}
