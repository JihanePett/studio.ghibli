var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/locations/";

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
  else{console.log("Sorry try again later")};
};

xhr.open("GET", url, true);
xhr.send();

function myFunction(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table class='table-responsive'>";
  out +=
    "<tr><th>Name</th><th>Climate</th><th>Terrain</th><th>Surface Water</th><th>Link to my location</th></tr>";
  for (i = 0; i < arr.length; i++) {
    out +=
      "<tr><td>" +
      arr[i].name +
      "</td><td>" +
      arr[i].climate +
      "</td><td>" +
      arr[i].terrain +
      "</td><td>" +
      arr[i].surface_water +
      "</td><td>" +  
      '<a class="people-url" target="_blank" href="' +
      arr[i].url +
      '">' +
      arr[i].url +
      "</a>" +
      "</td></tr>";
  }
  out += "</table>";
  document.getElementById("locations").innerHTML = out;
}
