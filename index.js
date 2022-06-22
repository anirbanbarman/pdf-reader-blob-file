var result;
var _name;
document.getElementById("button").addEventListener("click", function () {
  var files = document.getElementById("file").files;
 
  if (files.length > 0) {
     _name=files[0].name
    getBase64(files[0]);
  }
});

function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    result = reader.result;
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
function download() {

// Embed the PDF into the HTML page and show it to the user
var obj = document.createElement('object');
obj.style.width = '300px';
obj.style.height = '400px';
obj.type = 'application/pdf';
obj.data = result;
document.body.appendChild(obj);

// Insert a link that allows the user to download the PDF file
var link = document.createElement('a');
link.innerHTML = 'Download PDF file';
link.download = _name;
link.href = result;

document.body.appendChild(link);


}

function showIframe() {
var iframe = "<iframe width='100%' height='100%' src='" + result + "'></iframe>"
var x = window.open();
x.document.open();
x.document.write(iframe);
x.document.close();
}
