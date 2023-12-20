function checkPasswordMatch(){
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;

    if (pass !== repass) {
        document.getElementById("passwordError").innerHTML = "Пароли не совпадают";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
}

function saveData() {
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("pass").value;
    var image = document.getElementById("image").files[0];
    

    localStorage.setItem("name", name);
    localStorage.setItem("age", birthday);
    localStorage.setItem("gender", gender);
    localStorage.setItem("pass", password);

    if (image) {
        var reader = new FileReader();
        reader.onload = function(e) {
          localStorage.setItem("image", e.target.result); // Сохраняем изображение в формате base64 в localStorage
        }
        reader.readAsDataURL(image);
    }
    // Открываем другую вкладку
    window.open("PROFIL.html");
  }
