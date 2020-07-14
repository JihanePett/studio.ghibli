var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/films/";

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        myFunction(data);
    }
};
xhr.open("GET", url, true);
xhr.send();

function myFunction(data) {
    var linkout = "";
    var i;
    for(i = 0; i < data.length; i++) {
        linkout += '<a class="film-url" target="_blank" href="' + data[i].url + '">' +
        data[i].title + '</a><br>';
    }
   
    document.getElementById("placeholder").innerHTML = linkout;
}