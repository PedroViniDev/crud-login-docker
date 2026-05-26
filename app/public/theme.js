const body = document.body;
const themeButton = document.getElementById("themeButton");

function updateThemeIcon() {

  if(body.classList.contains("light")){

    themeButton.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  } else {

    themeButton.innerHTML =
    '<i class="fa-regular fa-sun"></i>';

  }
}

function toggleTheme() {

  body.classList.toggle("light");

  if(body.classList.contains("light")){

    localStorage.setItem("theme","light");

  } else {

    localStorage.setItem("theme","dark");

  }

  updateThemeIcon();
}

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
  body.classList.add("light");
}

updateThemeIcon();

function togglePassword(){

  const senhaInput =
  document.getElementById("senha");

  const eyeIcon =
  document.querySelector(".eye-icon");

  if(senhaInput.type === "password"){

    senhaInput.type = "text";

    eyeIcon.classList.remove("fa-eye");

    eyeIcon.classList.add("fa-eye-slash");

  } else {

    senhaInput.type = "password";

    eyeIcon.classList.remove("fa-eye-slash");

    eyeIcon.classList.add("fa-eye");

  }
}
