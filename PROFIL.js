document.getElementById("display_name").innerText = localStorage.getItem("name");
document.getElementById("display_birthday").innerText = localStorage.getItem("birthday");
document.getElementById("display_gender").innerText = localStorage.getItem("gender");

var imageSrc = localStorage.getItem("image");
  if (imageSrc) {
    document.getElementById("display_image").src = imageSrc;
  }

function previewFile() {
    var preview = document.getElementById('preview');
    var file = document.getElementById('imageUpload').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
}